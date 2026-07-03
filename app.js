const data = window.PUBLIC_FOLLOW_DATA || {};
const metrics = data.metrics || {};
const status = data.data_status || {};

const fmtMoney = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0,
});
const fmtNum = new Intl.NumberFormat("zh-TW", { maximumFractionDigits: 0 });
const capitalStorageKey = "investmentTrustCapitalSettings";

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  if (value === null || value === undefined || value === "") return "-";
  const n = Number(value);
  return Number.isFinite(n) ? fmtMoney.format(n) : "-";
}

function num(value) {
  if (value === null || value === undefined || value === "") return "-";
  const n = Number(value);
  return Number.isFinite(n) ? fmtNum.format(n) : "-";
}

function pct(value) {
  if (value === null || value === undefined || value === "") return "-";
  const n = Number(value);
  return Number.isFinite(n) ? `${n.toFixed(2)}%` : "-";
}

function pctClass(value) {
  if (value === null || value === undefined || value === "") return "";
  const n = Number(value);
  if (!Number.isFinite(n) || n === 0) return "";
  return n > 0 ? "pos" : "neg";
}

function shortDate(value) {
  return String(value || "-").slice(0, 10);
}

function reasonText(reason) {
  return reason || "-";
}

function stockName(row) {
  return `${row.stock_id || ""} ${row.company_name || ""}`.trim();
}

function finiteNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function daysBetween(start, end) {
  const a = new Date(`${shortDate(start)}T00:00:00+08:00`);
  const b = new Date(`${shortDate(end)}T00:00:00+08:00`);
  const diff = Math.round((b - a) / 86400000);
  return Number.isFinite(diff) && diff > 0 ? diff : 1;
}

function loadCapitalSettings() {
  try {
    return JSON.parse(localStorage.getItem(capitalStorageKey) || "{}");
  } catch {
    return {};
  }
}

function saveCapitalSettings(settings) {
  localStorage.setItem(capitalStorageKey, JSON.stringify(settings));
}

function baseInitialCapital() {
  return finiteNumber(metrics.initial_capital || data.assumptions?.initial_capital, 300000);
}

function baseCurrentCapital() {
  return finiteNumber(metrics.final_value, baseInitialCapital());
}

function adjustedMetrics() {
  const settings = loadCapitalSettings();
  const initial = finiteNumber(settings.initialCapital, baseInitialCapital());
  const current = finiteNumber(settings.currentCapital, baseCurrentCapital());
  const totalReturn = initial > 0 ? (current / initial - 1) * 100 : null;
  const days = daysBetween(metrics.start_date, metrics.end_date || status.signal_date);
  const annualized = initial > 0 ? ((current / initial) ** (365 / days) - 1) * 100 : null;
  return { initial, current, totalReturn, annualized };
}

function renderSummary() {
  const adjusted = adjustedMetrics();
  const items = [
    ["起始資金", money(adjusted.initial), `起算 ${shortDate(metrics.start_date)}`],
    ["目前資產", money(adjusted.current), `系統 ${money(metrics.final_value)}`],
    ["總報酬", pct(adjusted.totalReturn), `年化 ${pct(adjusted.annualized)}`],
    ["最大回撤", pct(metrics.max_drawdown_pct), "風險參考"],
    ["已出場", num(metrics.closed_trade_count), `勝率 ${pct(metrics.closed_trade_win_rate_pct)}`],
    ["持股", num(metrics.open_position_count), `最多 ${data.assumptions?.max_positions || 5} 檔`],
  ];
  document.getElementById("summary").innerHTML = items
    .map(
      ([label, value, sub]) => `
      <div class="metric">
        <span>${esc(label)}</span>
        <strong>${esc(value)}</strong>
        <small>${esc(sub)}</small>
      </div>`,
    )
    .join("");
}

function renderCapitalControls() {
  const initialInput = document.getElementById("initialCapitalInput");
  const currentInput = document.getElementById("currentCapitalInput");
  const resetButton = document.getElementById("resetCapital");
  const result = document.getElementById("capitalResult");
  if (!initialInput || !currentInput || !resetButton || !result) return;

  const settings = loadCapitalSettings();
  initialInput.value = finiteNumber(settings.initialCapital, baseInitialCapital()).toFixed(0);
  currentInput.value = finiteNumber(settings.currentCapital, baseCurrentCapital()).toFixed(0);

  const update = () => {
    const next = {
      initialCapital: finiteNumber(initialInput.value, baseInitialCapital()),
      currentCapital: finiteNumber(currentInput.value, baseCurrentCapital()),
    };
    saveCapitalSettings(next);
    const adjusted = adjustedMetrics();
    result.innerHTML = `
      <strong class="${pctClass(adjusted.totalReturn)}">${pct(adjusted.totalReturn)}</strong>
      <span>年化 ${pct(adjusted.annualized)}｜系統資產 ${money(metrics.final_value)}</span>
    `;
    renderSummary();
  };

  initialInput.addEventListener("input", update);
  currentInput.addEventListener("input", update);
  resetButton.addEventListener("click", () => {
    localStorage.removeItem(capitalStorageKey);
    initialInput.value = baseInitialCapital().toFixed(0);
    currentInput.value = baseCurrentCapital().toFixed(0);
    update();
  });
  update();
}

function renderMeta() {
  document.getElementById("meta").textContent = `更新 ${shortDate(data.generated_at)}｜篩選 ${shortDate(status.signal_date)}`;
  const statusText = `籌碼 ${shortDate(status.latest_chip_date)}，價格 ${shortDate(status.latest_price_date)}`;
  document.getElementById("dataStatus").textContent = status.warning ? `${statusText}｜${status.warning}` : statusText;
}

function renderActions() {
  const plan = data.trade_plan || {};
  const sellRows = plan.sell_orders || [];
  const buyRows = plan.buy_orders || [];
  const target = document.getElementById("todayActions");
  if (!sellRows.length && !buyRows.length) {
    target.innerHTML = `<div class="action-card"><strong>今日無新買進</strong><p>照目前持股續抱，等下一次盤後訊號。</p></div>`;
    return;
  }

  const sellHtml = sellRows.length
    ? sellRows
        .map(
          (row) => `
          <tr>
            <td>${esc(stockName(row))}</td>
            <td>${num(row.quantity)}</td>
            <td>${money(row.price)}</td>
            <td>${money(row.amount)}</td>
          </tr>`,
        )
        .join("")
    : `<tr><td colspan="4" class="muted center">不賣股</td></tr>`;

  const buyHtml = buyRows.length
    ? buyRows
        .map(
          (row) => `
          <tr>
            <td>${esc(stockName(row))}<br><span class="muted">${row.action === "SELL_WEAKEST_BUY_CANDIDATE" ? "換股買進" : "新買進"}</span></td>
            <td>${num(row.quantity)}</td>
            <td>${money(row.price)}</td>
            <td>${money(row.amount)}</td>
          </tr>`,
        )
        .join("")
    : `<tr><td colspan="4" class="muted center">不買股</td></tr>`;

  const net = Number(plan.cash_after_plan);
  const netText = Number.isFinite(net) && net >= 0
    ? `買賣後預估剩餘現金 ${money(plan.remaining_cash)}`
    : `買賣後預估還差 ${money(plan.needs_extra_cash)}`;

  target.innerHTML = `
    <div class="trade-ledger">
      <div class="ledger-column sell">
        <h3>左邊：先賣出</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>股票</th><th>股數</th><th>參考價</th><th>騰出資金</th></tr></thead>
            <tbody>${sellHtml}</tbody>
          </table>
        </div>
        <div class="ledger-total">賣出合計 ${money(plan.total_sell_amount)}</div>
      </div>
      <div class="ledger-column buy">
        <h3>右邊：再買進</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>股票</th><th>股數</th><th>參考價</th><th>需要資金</th></tr></thead>
            <tbody>${buyHtml}</tbody>
          </table>
        </div>
        <div class="ledger-total">買進合計 ${money(plan.total_buy_amount)}</div>
      </div>
    </div>
    <div class="net-summary ${Number.isFinite(net) && net < 0 ? "neg-bg" : "pos-bg"}">
      原現金 ${money(plan.starting_cash)} + 賣出 ${money(plan.total_sell_amount)} - 買進 ${money(plan.total_buy_amount)} = ${netText}
    </div>`;
}

function renderHoldings() {
  const rows = data.holdings || [];
  document.getElementById("holdings").innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${esc(row.stock_id)} ${esc(row.company_name)}<br><span class="muted">${shortDate(row.entry_date)} 進場</span></td>
        <td>${num(row.quantity)}</td>
        <td>${money(row.current_price)}</td>
        <td class="${pctClass(row.unrealized_return_pct)}">${pct(row.unrealized_return_pct)}</td>
        <td>${money(row.market_value)}</td>
      </tr>`,
    )
    .join("");
}

function renderEntries() {
  document.getElementById("entries").innerHTML = (data.recent_entries || [])
    .map(
      (row) => `
      <tr>
        <td>${shortDate(row.entry_date)}</td>
        <td>${esc(row.stock_id)} ${esc(row.company_name)}</td>
        <td>${money(row.entry_price)}</td>
        <td>${num(row.quantity)}</td>
        <td>${money(row.cost)}</td>
      </tr>`,
    )
    .join("");
}

function renderClosedTrades() {
  document.getElementById("closedTrades").innerHTML = (data.recent_closed_trades || [])
    .map(
      (row) => `
      <tr>
        <td>${shortDate(row.exit_date)}</td>
        <td>${esc(row.stock_id)} ${esc(row.company_name)}</td>
        <td>${esc(reasonText(row.exit_reason))}</td>
        <td class="${pctClass(row.return_pct)}">${pct(row.return_pct)}</td>
        <td>${num(row.holding_days)}</td>
      </tr>`,
    )
    .join("");
}

renderMeta();
renderCapitalControls();
renderActions();
renderHoldings();
renderEntries();
renderClosedTrades();

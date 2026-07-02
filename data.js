window.PUBLIC_FOLLOW_DATA = {
  "generated_at": "2026-07-02T17:43:22.285186+08:00",
  "public_note": "Static follow dashboard only. Backend code, database, cache, and parameter search files are local-only.",
  "assumptions": {
    "initial_capital": 300000.0,
    "max_positions": 5,
    "transaction_costs": "not included",
    "position_sizing": "Capital is split across up to 5 positions with integer-share sizing."
  },
  "data_status": {
    "signal_date": "2026-07-02",
    "latest_chip_date": "2026-07-02",
    "latest_price_date": "2026-07-02",
    "candidate_count": 2,
    "warning": null
  },
  "metrics": {
    "initial_capital": 300000.0,
    "final_value": 638781.0007644654,
    "cash": 4620.701188659703,
    "total_return_pct": 112.9270002548218,
    "annualized_return_pct": 421.66359530259945,
    "start_date": "2026-01-16",
    "end_date": "2026-07-02",
    "closed_trade_count": 4,
    "entry_count": 5,
    "open_position_count": 5,
    "closed_trade_win_rate_pct": 75.0,
    "average_closed_trade_return_pct": 3.643039634594594,
    "max_drawdown_pct": 0,
    "performance_source": "actual_follow_account"
  },
  "equity_curve": [
    {
      "date": "2026-07-01",
      "equity": 634504.2448249818,
      "cash": 4620.701188659703,
      "position_count": 5
    },
    {
      "date": "2026-07-02",
      "equity": 638781.0007644654,
      "cash": 4620.701188659703,
      "position_count": 5
    }
  ],
  "holdings": [
    {
      "stock_id": "4958",
      "company_name": "臻鼎-KY",
      "quantity": 230,
      "entry_date": "2026-06-16",
      "entry_price": 596.0,
      "current_price_date": "2026-07-02",
      "current_price": 598.0,
      "market_value": 137540.0,
      "unrealized_return_pct": 0.3355704697986628,
      "holding_days": 16
    },
    {
      "stock_id": "6669",
      "company_name": "緯穎",
      "quantity": 26,
      "entry_date": "2026-07-01",
      "entry_price": 4740.0,
      "current_price_date": "2026-07-02",
      "current_price": 5200.0,
      "market_value": 135200.0,
      "unrealized_return_pct": 9.704641350210963,
      "holding_days": 1
    },
    {
      "stock_id": "2610",
      "company_name": "華航",
      "quantity": 5190,
      "entry_date": "2026-07-01",
      "entry_price": 23.700000762939453,
      "current_price_date": "2026-07-02",
      "current_price": 22.850000381469727,
      "market_value": 118591.50197982788,
      "unrealized_return_pct": -3.58649938441733,
      "holding_days": 1
    },
    {
      "stock_id": "2801",
      "company_name": "彰銀",
      "quantity": 5126,
      "entry_date": "2026-07-01",
      "entry_price": 24.0,
      "current_price_date": "2026-07-02",
      "current_price": 23.350000381469727,
      "market_value": 119692.10195541382,
      "unrealized_return_pct": -2.7083317438761356,
      "holding_days": 1
    },
    {
      "stock_id": "2542",
      "company_name": "興富發",
      "quantity": 2857,
      "entry_date": "2026-07-01",
      "entry_price": 43.0,
      "current_price_date": "2026-07-02",
      "current_price": 43.099998474121094,
      "market_value": 123136.69564056396,
      "unrealized_return_pct": 0.23255459097928366,
      "holding_days": 1
    }
  ],
  "trade_plan": {
    "sell_orders": [
      {
        "stock_id": "2542",
        "company_name": "興富發",
        "quantity": 2857,
        "price": 43.099998474121094,
        "amount": 123136.69564056396
      },
      {
        "stock_id": "2801",
        "company_name": "彰銀",
        "quantity": 5126,
        "price": 23.350000381469727,
        "amount": 119692.10195541382
      }
    ],
    "buy_orders": [
      {
        "stock_id": "5289",
        "company_name": "宜鼎",
        "quantity": 74,
        "price": 1715.0,
        "amount": 126910.0,
        "action": "SELL_WEAKEST_BUY_CANDIDATE",
        "entry_date": null
      },
      {
        "stock_id": "6442",
        "company_name": "光聖",
        "quantity": 78,
        "price": 1635.0,
        "amount": 127530.0,
        "action": "SELL_WEAKEST_BUY_CANDIDATE",
        "entry_date": null
      }
    ],
    "total_sell_amount": 242828.79759597778,
    "total_buy_amount": 254440.0,
    "starting_cash": 4620.701188659703,
    "net_cash_change": -11611.202404022217,
    "cash_after_plan": -6990.501215362514,
    "needs_extra_cash": 6990.501215362514,
    "remaining_cash": 0.0
  },
  "today_candidates": [
    {
      "rank": 1,
      "signal_date": "2026-07-02",
      "stock_id": "5289",
      "company_name": "宜鼎",
      "action": "SELL_WEAKEST_BUY_CANDIDATE",
      "reference_price": 1715.0,
      "target_amount": 127756.20015289309,
      "suggested_quantity": 74,
      "buy_amount": 126910.0,
      "sell_stock_id": "2542",
      "sell_company_name": "興富發",
      "sell_quantity": 2857,
      "sell_current_price": 43.099998474121094,
      "sell_market_value": 123136.69564056396,
      "action_text": "換股買進"
    },
    {
      "rank": 2,
      "signal_date": "2026-07-02",
      "stock_id": "6442",
      "company_name": "光聖",
      "action": "SELL_WEAKEST_BUY_CANDIDATE",
      "reference_price": 1635.0,
      "target_amount": 127756.20015289309,
      "suggested_quantity": 78,
      "buy_amount": 127530.0,
      "sell_stock_id": "2801",
      "sell_company_name": "彰銀",
      "sell_quantity": 5126,
      "sell_current_price": 23.350000381469727,
      "sell_market_value": 119692.10195541382,
      "action_text": "換股買進"
    }
  ],
  "recent_entries": [
    {
      "stock_id": "6669",
      "company_name": "緯穎",
      "entry_date": "2026-07-01",
      "entry_price": 4740.0,
      "quantity": 26,
      "cost": 123240.0
    },
    {
      "stock_id": "2610",
      "company_name": "華航",
      "entry_date": "2026-07-01",
      "entry_price": 23.700000762939453,
      "quantity": 5190,
      "cost": 123003.00395965576
    },
    {
      "stock_id": "2801",
      "company_name": "彰銀",
      "entry_date": "2026-07-01",
      "entry_price": 24.0,
      "quantity": 5126,
      "cost": 123024.0
    },
    {
      "stock_id": "2542",
      "company_name": "興富發",
      "entry_date": "2026-07-01",
      "entry_price": 43.0,
      "quantity": 2857,
      "cost": 122851.0
    },
    {
      "stock_id": "4958",
      "company_name": "臻鼎-KY",
      "entry_date": "2026-06-16",
      "entry_price": 596.0,
      "quantity": 230,
      "cost": 137080.0
    }
  ],
  "recent_closed_trades": [
    {
      "stock_id": "8070",
      "company_name": "長華*",
      "entry_date": "2026-06-29",
      "entry_price": 53.79999923706055,
      "quantity": 2192,
      "exit_date": "2026-07-01",
      "exit_price": 54.099998474121094,
      "exit_reason": "follow_signal_replace",
      "return_pct": 0.557619407648402,
      "holding_days": 2
    },
    {
      "stock_id": "5434",
      "company_name": "崇越",
      "entry_date": "2026-06-29",
      "entry_price": 507.0,
      "quantity": 229,
      "exit_date": "2026-07-01",
      "exit_price": 550.0,
      "exit_reason": "follow_signal_replace",
      "return_pct": 8.481262327416172,
      "holding_days": 2
    },
    {
      "stock_id": "6409",
      "company_name": "旭隼",
      "entry_date": "2026-06-29",
      "entry_price": 999.0,
      "quantity": 123,
      "exit_date": "2026-07-01",
      "exit_price": 1090.0,
      "exit_reason": "follow_signal_replace",
      "return_pct": 9.109109109109115,
      "holding_days": 2
    },
    {
      "stock_id": "6691",
      "company_name": "洋基工程",
      "entry_date": "2026-06-29",
      "entry_price": 811.0,
      "quantity": 151,
      "exit_date": "2026-07-01",
      "exit_price": 782.0,
      "exit_reason": "follow_signal_replace",
      "return_pct": -3.5758323057953123,
      "holding_days": 2
    }
  ]
};

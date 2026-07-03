window.PUBLIC_FOLLOW_DATA = {
  "generated_at": "2026-07-03T17:32:54.399035+08:00",
  "public_note": "Static follow dashboard only. Backend code, database, cache, and parameter search files are local-only.",
  "assumptions": {
    "initial_capital": 300000.0,
    "max_positions": 5,
    "transaction_costs": "not included",
    "position_sizing": "Capital is split across up to 5 positions with integer-share sizing."
  },
  "data_status": {
    "signal_date": "2026-07-03",
    "latest_chip_date": "2026-07-03",
    "latest_price_date": "2026-07-03",
    "candidate_count": 2,
    "warning": null
  },
  "metrics": {
    "initial_capital": 300000.0,
    "final_value": 641742.5491844178,
    "cash": -2081.9468559264787,
    "total_return_pct": 113.91418306147258,
    "annualized_return_pct": 421.7768452078567,
    "start_date": "2026-01-16",
    "end_date": "2026-07-03",
    "closed_trade_count": 6,
    "entry_count": 7,
    "open_position_count": 5,
    "closed_trade_win_rate_pct": 50.0,
    "average_closed_trade_return_pct": 1.7067941298330593,
    "max_drawdown_pct": 0.0,
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
    },
    {
      "date": "2026-07-03",
      "equity": 641742.5491844178,
      "cash": -2081.9468559264787,
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
      "current_price_date": "2026-07-03",
      "current_price": 613.0,
      "market_value": 140990.0,
      "unrealized_return_pct": 2.8523489932885893,
      "holding_days": 17,
      "concept_tag_names": []
    },
    {
      "stock_id": "6669",
      "company_name": "緯穎",
      "quantity": 26,
      "entry_date": "2026-07-01",
      "entry_price": 4740.0,
      "current_price_date": "2026-07-03",
      "current_price": 5265.0,
      "market_value": 136890.0,
      "unrealized_return_pct": 11.075949367088601,
      "holding_days": 2,
      "concept_tag_names": [
        "AI伺服器"
      ]
    },
    {
      "stock_id": "2610",
      "company_name": "華航",
      "quantity": 5190,
      "entry_date": "2026-07-01",
      "entry_price": 23.700000762939453,
      "current_price_date": "2026-07-03",
      "current_price": 22.549999237060547,
      "market_value": 117034.49604034424,
      "unrealized_return_pct": -4.852326957209241,
      "holding_days": 2,
      "concept_tag_names": []
    },
    {
      "stock_id": "5289",
      "company_name": "宜鼎",
      "quantity": 74,
      "entry_date": "2026-07-03",
      "entry_price": 1660.0,
      "current_price_date": "2026-07-03",
      "current_price": 1635.0,
      "market_value": 120990.0,
      "unrealized_return_pct": -1.5060240963855387,
      "holding_days": 0,
      "concept_tag_names": []
    },
    {
      "stock_id": "6442",
      "company_name": "光聖",
      "quantity": 78,
      "entry_date": "2026-07-03",
      "entry_price": 1595.0,
      "current_price_date": "2026-07-03",
      "current_price": 1640.0,
      "market_value": 127920.0,
      "unrealized_return_pct": 2.8213166144200663,
      "holding_days": 0,
      "concept_tag_names": [
        "光通訊模組",
        "矽光子/CPO"
      ]
    }
  ],
  "trade_plan": {
    "sell_orders": [
      {
        "stock_id": "6442",
        "company_name": "光聖",
        "quantity": 78,
        "price": 1640.0,
        "amount": 127920.0,
        "concept_tag_names": [
          "光通訊模組",
          "矽光子/CPO"
        ]
      },
      {
        "stock_id": "2610",
        "company_name": "華航",
        "quantity": 5190,
        "price": 22.549999237060547,
        "amount": 117034.49604034424,
        "concept_tag_names": []
      }
    ],
    "buy_orders": [
      {
        "stock_id": "4979",
        "company_name": "華星光",
        "quantity": 273,
        "price": 468.5,
        "amount": 127900.5,
        "action": "SELL_WEAKEST_BUY_CANDIDATE",
        "entry_date": null,
        "concept_tag_names": [
          "光通訊模組",
          "矽光子/CPO"
        ]
      },
      {
        "stock_id": "2368",
        "company_name": "金像電",
        "quantity": 98,
        "price": 1305.0,
        "amount": 127890.0,
        "action": "SELL_WEAKEST_BUY_CANDIDATE",
        "entry_date": null,
        "concept_tag_names": [
          "PCB/HDI"
        ]
      }
    ],
    "total_sell_amount": 244954.49604034424,
    "total_buy_amount": 255790.5,
    "starting_cash": -2081.9468559264787,
    "net_cash_change": -10836.003959655762,
    "cash_after_plan": -12917.95081558224,
    "needs_extra_cash": 12917.95081558224,
    "remaining_cash": 0.0
  },
  "today_candidates": [
    {
      "rank": 1,
      "signal_date": "2026-07-03",
      "stock_id": "4979",
      "company_name": "華星光",
      "action": "SELL_WEAKEST_BUY_CANDIDATE",
      "reference_price": 468.5,
      "target_amount": 128348.50983688356,
      "suggested_quantity": 273,
      "buy_amount": 127900.5,
      "sell_stock_id": "6442",
      "sell_company_name": "光聖",
      "sell_quantity": 78,
      "sell_current_price": 1640.0,
      "sell_market_value": 127920.0,
      "concept_tag_names": [
        "光通訊模組",
        "矽光子/CPO"
      ],
      "sell_concept_tag_names": [
        "光通訊模組",
        "矽光子/CPO"
      ],
      "action_text": "換股買進"
    },
    {
      "rank": 2,
      "signal_date": "2026-07-03",
      "stock_id": "2368",
      "company_name": "金像電",
      "action": "SELL_WEAKEST_BUY_CANDIDATE",
      "reference_price": 1305.0,
      "target_amount": 128348.50983688356,
      "suggested_quantity": 98,
      "buy_amount": 127890.0,
      "sell_stock_id": "2610",
      "sell_company_name": "華航",
      "sell_quantity": 5190,
      "sell_current_price": 22.549999237060547,
      "sell_market_value": 117034.49604034424,
      "concept_tag_names": [
        "PCB/HDI"
      ],
      "sell_concept_tag_names": [],
      "action_text": "換股買進"
    }
  ],
  "recent_entries": [
    {
      "stock_id": "5289",
      "company_name": "宜鼎",
      "entry_date": "2026-07-03",
      "entry_price": 1660.0,
      "quantity": 74,
      "cost": 122840.0,
      "concept_tag_names": []
    },
    {
      "stock_id": "6442",
      "company_name": "光聖",
      "entry_date": "2026-07-03",
      "entry_price": 1595.0,
      "quantity": 78,
      "cost": 124410.0,
      "concept_tag_names": [
        "光通訊模組",
        "矽光子/CPO"
      ]
    },
    {
      "stock_id": "6669",
      "company_name": "緯穎",
      "entry_date": "2026-07-01",
      "entry_price": 4740.0,
      "quantity": 26,
      "cost": 123240.0,
      "concept_tag_names": [
        "AI伺服器"
      ]
    },
    {
      "stock_id": "2610",
      "company_name": "華航",
      "entry_date": "2026-07-01",
      "entry_price": 23.700000762939453,
      "quantity": 5190,
      "cost": 123003.00395965576,
      "concept_tag_names": []
    },
    {
      "stock_id": "2801",
      "company_name": "彰銀",
      "entry_date": "2026-07-01",
      "entry_price": 24.0,
      "quantity": 5126,
      "cost": 123024.0,
      "concept_tag_names": []
    },
    {
      "stock_id": "2542",
      "company_name": "興富發",
      "entry_date": "2026-07-01",
      "entry_price": 43.0,
      "quantity": 2857,
      "cost": 122851.0,
      "concept_tag_names": []
    },
    {
      "stock_id": "4958",
      "company_name": "臻鼎-KY",
      "entry_date": "2026-06-16",
      "entry_price": 596.0,
      "quantity": 230,
      "cost": 137080.0,
      "concept_tag_names": []
    }
  ],
  "recent_closed_trades": [
    {
      "stock_id": "2542",
      "company_name": "興富發",
      "entry_date": "2026-07-01",
      "entry_price": 43.0,
      "quantity": 2857,
      "exit_date": "2026-07-03",
      "exit_price": 42.75,
      "exit_reason": "follow_signal_replace",
      "return_pct": -0.5813953488372103,
      "holding_days": 2,
      "concept_tag_names": []
    },
    {
      "stock_id": "2801",
      "company_name": "彰銀",
      "entry_date": "2026-07-01",
      "entry_price": 24.0,
      "quantity": 5126,
      "exit_date": "2026-07-03",
      "exit_price": 23.100000381469727,
      "exit_reason": "follow_signal_replace",
      "return_pct": -3.7499984105428097,
      "holding_days": 2,
      "concept_tag_names": []
    },
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
      "holding_days": 2,
      "concept_tag_names": []
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
      "holding_days": 2,
      "concept_tag_names": []
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
      "holding_days": 2,
      "concept_tag_names": []
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
      "holding_days": 2,
      "concept_tag_names": [
        "半導體設備"
      ]
    }
  ]
};

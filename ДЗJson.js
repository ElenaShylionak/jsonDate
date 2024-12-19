
//этот код описывает две основных составл€ющих каждой транзакции: скидку и кэшбэк, с подробной информацией о каждом из них.
//ƒвойна€ вложенность используетс€ дл€ удобства структурировани€ данных и упрощени€ их обработки.
{
    "history_cashback_discounts": [
    {
        "total_amount": 13000,
            "transactions": [
                {
                    "date": "March 27",
                    "store": "Aзбука вкуса",
                    "amount_spent": 1250,
                    "cashback": {
                        "value": 100,
                        "currency": "RUB"
                    },
                    "expenditure": {
                        "percentage": 5,
                        "amount": 62.5,
                        "currency": "RUB"
                    }
                },
                {
                    "date": "March 27",
                    "store": "Ћента",
                    "amount_spent": 1250,
                    "discount": {
                        "value": 50,
                        "currency": "RUB"
                    },
                    "cashback": {
                        "percentage": 5,
                        "amount": 25,
                        "currency": "RUB"
                    }
                },
                {
                    "date": "March 25",
                    "store": "ѕ€терочка",
                    "amount_spent": 300,
                    "discount": {
                        "value": 30,
                        "currency": "RUB"
                    },
                    "cashback": {
                        "percentage": 5,
                        "amount": 15,
                        "currency": "RUB"
                    }
                }
            ]
    }

  ]
}

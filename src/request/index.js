const getAllGoods = async () => ({

  "data": {
    "categories": [
      // {
      //   "name": "all",
      //   "products": [
      //   ]
      // },
       {
        "name": "Закуски",
        "products": [
          {
            "id": "Сирні палички",
            "name": "Сирні палички",
            "inStock": false,
            "gallery": [
              "Cheese.png",
           ],
            "description": "Смачні, гарячі, хрумкі та тягучі сирні палички фрі",
            "category": "snack",
            "prices": "60 грн"
          // },
          //  {
          //   "id": "Рибні палички",
          //   "name": "Рибні палички",
          //   "inStock": false,
          //   "gallery": [
          //     "Fish.png",
          //  ],
          //   "description": "Смачні, гарячі, хрумкі рибні палички фрі",
          //   "category": "snack",
          //   "prices": "35 грн"
          }, {
            "id": "Цибулеві кільця фрі",
            "name": "Цибулеві кільця фрі",
            "inStock": false,
            "gallery": [
              "Kalmar.png",
           ],
            "description": "Смачні, гарячі, хрумкі цибулеві кільця фрі",
            "category": "snack",
            "prices": "55 грн"
          }, {
            "id": "Свинячі вушка",
            "name": "Свинячі вушка",
            "inStock": false,
            "gallery": [
              ".png",
           ],
            "description": "Смачні, в міру підкопчені свинячі вушка",
            "category": "snack",
            "prices": "50 грн"
          }, {
            "id": "Грибочки фрі",
            "name": "Грибочки фрі",
            "inStock": false,
            "gallery": [
              "Mush.png",
           ],
            "description": "Смачні грибочки фрі",
            "category": "snack",
            "prices": "40 грн"
          },
           {
            "id": "Сухарики з часником",
            "name": "Сухарики з часником",
            "inStock": false,
            "gallery": [
              ".png",
           ],
            "description": "Чудова закуска до пива",
            "category": "snack",
            "prices": "40 грн/150 грам"
          },{
            "id": "Канапки ~до горілочки~",
            "name": "Канапки ~до горілочки~",
            "inStock": false,
            "gallery": [
              ".png",
           ],
            "description": "Канапки ~до горілочки~",
            "category": "snack",
            "prices": "50 грн"
          },
           {
            "id": "Овочі гриль",
            "name": "Овочі гриль",
            "inStock": false,
            "gallery": [
              ".png",
           ],
            "description": "Перелік овочів",
            "category": "snack",
            "prices": "70 грн"
          }
        ]
      },
      {
        "name": "Сети",
        "products": [
          {
            "id": "Сет для друзів",
            "name": "Сет для друзів",
            "inStock": true,
            "gallery": [
              "SetF.png"
            ],
            "description": "Курячі крильця, нагетси, картопля фрі, цибулеві кільця, соус",
            "category": "set",
            "prices": "170 грн"
          },
          {
            "id": "Сет до пива",
            "name": "Сет до пива",
            "inStock": true,
            "gallery": [
              "SetB.png"],
            "description": "Ковбаски гриль, сухарики з часником, картопля фрі/по селянськи, свинячі вушка, соус",
            "category": "set",
            "prices": "160 грн"
          }
        ]
      },
     
         {
        "name": "Піцца",
        "products": [
          {
            "id": "Pizza Havai",
            "name": "Pizza Havai",
            "inStock": true,
            "gallery": [
            "PizzaB.png" 
            ],
            "description": "Гаряча піцца з ананасами та курочкою, час приготування 30хв",
            "category": "pizza",
            "prices": "70 грн"
          },
          {
            "id": "Pizza BBQ",
            "name": "Pizza BBQ",
            "inStock": true,
            "gallery": [
            "PizzaB.png" 
            ],
            "description": "Гаряча піцца з ковбасками та соусом барбекю, час приготування 30хв",
            "category": "pizza",
            "prices": "70 грн"
          },
          {
            "id": "Pizza More",
            "name": "Pizza More",
            "inStock": true,
            "gallery": [
            "PizzaB.png" 
            ],
            "description": "Гаряча піцца з морепродуктами, час приготування 30хв",
            "category": "pizza",
            "prices": "70 грн"
          },
          {
            "id": "Соковитий чебурек meat",
            "name": "Соковитий чебурек meat",
            "inStock": true,
            "gallery": [
            "Cheburek.png" 
            ],
            "description": "Гарячий,соковитий чебурек з м’ясом",
            "category": "pizza",
            "prices": "70 грн"
          },
          {
            "id": "Соковитий чебурек cheese",
            "name": "Соковитий чебурек cheese",
            "inStock": true,
            "gallery": [
            "Cheburek.png" 
            ],
            "description": "Гарячий, соковитий чебурек з сиром та зеленню",
            "category": "pizza",
            "prices": "70 грн"
          },
          {
            "id": "Мега-Шаурма",
            "name": "Мега-Шаурма",
            "inStock": true,
            "gallery": [
            "PizzaB.jpg" 
            ],
            "description": "Гаряча шаурма з курячим м’ясом, овочами та сиром",
            "category": "pizza",
            "prices": "70 грн"
          },{
            "id": "Хот дог",
            "name": "Хот дог",
            "inStock": true,
            "gallery": [
            "PizzaB.jpg" 
            ],
            "description": "Гарячий хот-дог з сосискою та соусами",
            "category": "pizza",
            "prices": "70 грн"
          }
        ]
      },
       {
        "name": "Бургер-меню",
        "products": [
          {
            "id": "Chicago-Burger",
            "name": "Chicago-Burger",
            "inStock": true,
            "gallery": ["Burger.png"],
            "description": "Котлета з курятини",
            "category": "burger",
           "prices": "85 грн"
          },
          {
            "id": "Burger-Texas",
            "name": "Burger-Texas",
            "inStock": true,
            "gallery": [
           "Burger.png"],
            "description": "Котлета з свинини та яловичини",
            "category": "burger",
            "prices": "85 грн"
          }
        ]
      },
                 {
        "name": "Салати",
        "products": [
          {
            "id": "Грецький салат",
            "name": "Грецький салат",
            "inStock": true,
            "gallery": [
           "Grees.png"],
            "description": "Салат з помідором, огірком, сиром фета, оливками, базеліком та оливковою олією",
            "category": "salad",
            "prices": "70 грн / 300 грам"
          },   {
            "id": "Салат цезар",
            "name": "Салат цезар з куркою",
            "inStock": true,
            "gallery": [
           "Cesar.png"],
            "description": "Салат з помідором, листям салату, сиром пармезан, куркою, перепелиним яйцем та соусом цезар",
            "category": "salad",
            "prices": "90 грн / 270 грам"
          },   {
            "id": "Салат цезар з креветками",
            "name": "Салат цезар з креветками",
            "inStock": true,
            "gallery": [
           "CesarSr.png"],
            "description": "Салат з помідором, листям салату, сиром пармезан, креветками та соусом цезар",
            "category": "salad",
            "prices": "100 грн / 270 грам"
          },   {
            "id": "Салат від шефа",
            "name": "Салат від шефа",
            "inStock": true,
            "gallery": [
           ".png"],
            "description": "Салат з сирої морковки та свинячих вушок заправлений соусом",
            "category": "salad",
            "prices": "60 грн / 250 грам"
          },    {
            "id": "Салат з качкою та карамелізованими яблуками",
            "name": "Салат з качкою та карамелізованими яблуками",
            "inStock": true,
            "gallery": [
           ""],
            "description": "Салат з качкою та карамелізованими яблуками",
            "category": "salad",
            "prices": "100 грн / 300 грам"
          }
        ]
      },
            {
        "name": "М’ясні страви",
              "products": [
           {
            "id": "Салат від шефа",
            "name": "Салат від шефа",
            "inStock": true,
            "gallery": [
           ".png"],
            "description": "Салат з сирої морковки та свинячих вушок заправлений соусом",
            "category": "salad",
            "prices": "60 грн / 250 грам"
          },    {
            "id": "Салат з качкою та карамелізованими яблуками",
            "name": "Салат з качкою та карамелізованими яблуками",
            "inStock": true,
            "gallery": [
           ""],
            "description": "Салат з качкою та карамелізованими яблуками",
            "category": "salad",
            "prices": "100 грн / 300 грам"
          }
        ]
      },
      {
        "name": "Передзамовлення",
        "products": [ 
        ]
      },     {
        "name": "Десерти",
        "products": [
          {
            "id": "Морозиво в асортименті ",
            "name": "Морозиво в ріжку",
            "inStock": true,
            "gallery": [
              "IceCream.png"
            ],
            "description": "Морозиво в асортименті (ріжок або порційно)",
            "category": "dessert",
           "prices": "25 грн"
          },
          {
            "id": "Морозиво чорничний чізкейк",
            "name": "Морозиво чорничний чізкейк",
            "inStock": true,
            "gallery": [
              "IceCream.png"
            ],
            "description": "Морозиво в ріжку чорничний чізкейк Монако",
            "category": "dessert",
           "prices": "30 грн"
          },{
            "id": "Круасан",
            "name": "Круасан",
            "inStock": true,
            "gallery": [
              "Croissan.png"
            ],
            "description": "",
            "category": "dessert",
           "prices": "50 грн"
          },{
            "id": "Млинці з начинкою",
            "name": "Млинці з начинкою",
            "inStock": true,
            "gallery": [
              "Blin.png"
            ],
            "description": "",
            "category": "dessert",
           "prices": "35 грн"
          },{
            "id": "Полуниця з рафаелло",
            "name": "Полуниця з рафаелло",
            "inStock": true,
            "gallery": [
              "Strawberry.png"
            ],
            "description": "",
            "category": "dessert",
           "prices": "70 грн"
          }
        ]
      }
    ]
  }

});

const getAllCurrency = async () => ({
  // "data": {
  //   "currencies": [
  //     {
  //       "label": "USD",
  //       "symbol": "$"
  //     },
  //     {
  //       "label": "GBP",
  //       "symbol": "£"
  //     },
  //     {
  //       "label": "AUD",
  //       "symbol": "A$"
  //     },
  //     {
  //       "label": "JPY",
  //       "symbol": "¥"
  //     },
  //     {
  //       "label": "RUB",
  //       "symbol": "₽"
  //     }
  //   ]
  // }
})

const getAllCategories = async () => ({
  data: {
    categories: [
      {
        id: 1,
        category: 'Сети',
      },
      {
        id: 2,
        category: 'Закуски',
      },
    ]
  }
})

export {
  getAllGoods,
  getAllCurrency,
  getAllCategories,
}

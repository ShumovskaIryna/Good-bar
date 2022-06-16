const getAllGoods = async () => ({

  "data": {
    "categories": [
      // {
      //   "name": "all",
      //   "products": [
      //     {
      //       "id": "huarache-x-stussy-le",
      //       "name": "Nike Air Huarache Le",
      //       "inStock": true,
      //       "gallery": [
      //         "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
      //         "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
      //         "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
      //         "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
      //         "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
      //       ],
      //       "description": "<p>Great sneakers for everyday use!</p>",
      //       "category": "clothes",
      //       "attributes": [
      //         {
      //           "id": "Size",
      //           "name": "Size",
      //           "type": "text",
      //           "items": [
      //             {
      //               "displayValue": "40",
      //               "value": "40",
      //               "id": "40"
      //             },
      //             {
      //               "displayValue": "41",
      //               "value": "41",
      //               "id": "41"
      //             },
      //             {
      //               "displayValue": "42",
      //               "value": "42",
      //               "id": "42"
      //             },
      //             {
      //               "displayValue": "43",
      //               "value": "43",
      //               "id": "43"
      //             }
      //           ]
      //         }
      //       ],
      //       "prices": "170грн"
      //     }
      //   ]
      // },
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
          },
           {
            "id": "Рибні палички",
            "name": "Рибні палички",
            "inStock": false,
            "gallery": [
              "Fish.png",
           ],
            "description": "Смачні, гарячі, хрумкі рибні палички фрі",
            "category": "snack",
            "prices": "35 грн"
          }, {
            "id": "Кальмар фрі",
            "name": "Кальмар фрі",
            "inStock": false,
            "gallery": [
              "Kalmar.png",
           ],
            "description": "Смачні, гарячі, хрумкі кальмари фрі",
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
            "prices": "35 грн"
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
            "prices": "35 грн/150 грам"
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
          },{
            "id": "Помідори фірмові",
            "name": "Помідори фірмові",
            "inStock": false,
            "gallery": [
              ".png",
           ],
            "description": "Апетитні, соковиті помідори з спеціями",
            "category": "snack",
            "prices": "30 грн"
          },{
            "id": "Грибочки мариновані",
            "name": "Грибочки мариновані",
            "inStock": false,
            "gallery": [
              ".png",
           ],
            "description": "Просто мариновані грибочки",
            "category": "snack",
            "prices": "45 грн"
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
            "id": "Pizza BQQ",
            "name": "Pizza BQQ",
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
            "description": "Салат з помідором, листям салату, сиром пармезан, креветками, перепелиним яйцем та соусом цезар",
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
            "prices": "70 грн / 200 грам"
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
            "id": "Морозиво в ріжку",
            "name": "Морозиво в ріжку",
            "inStock": true,
            "gallery": [
              "IceCream.png"
            ],
            "description": "Морозиво в ріжку MONACO",
            "category": "dessert",
           "prices": "25 грн"
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

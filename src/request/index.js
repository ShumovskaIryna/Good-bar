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
              "Cheese1.png",
           ],
            "description": "Смачні, гарячі, хрумкі та тягучі сирні палички фрі",
            "category": "snack",
            "prices": "85 грн"
          },
           {
            "id": "Сирне плато",
            "name": "Сирне плато",
            "inStock": false,
            "gallery": [
              "SetC.png",
           ],
            "description": "Різовид чотирьох сирів",
            "category": "snack",
            "prices": "170 грн / 350 грам"
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
          },
           {
            "id": "Крильця KFC",
            "name": "Крильця KFC",
            "inStock": false,
            "gallery": [
              "Krula.png",
           ],
            "description": "Крильця, хрумкі та соковиті всередині",
            "category": "snack",
            "prices": "70 грн"
          },
           {
            "id": "Нагетси",
            "name": "Нагетси",
            "inStock": false,
            "gallery": [
              "Nagets.png",
           ],
            "description": "",
            "category": "snack",
            "prices": "60 грн"
          },
           {
            "id": "Крила апетитні",
            "name": "Крила апетитні",
            "inStock": false,
            "gallery": [
              "KrulaA.png",
           ],
            "description": "",
            "category": "snack",
            "prices": "60 грн"
          },
          {
            "id": "Свинячі вушка",
            "name": "Свинячі вушка",
            "inStock": false,
            "gallery": [
              "Vuha.png",
           ],
            "description": "Смачні, в міру підкопчені свинячі вушка",
            "category": "snack",
            "prices": "60 грн"
          },
          {
            "id": "Ковбаски гриль",
            "name": "Ковбаски гриль",
            "inStock": false,
            "gallery": [
              "Sausage.png",
           ],
            "description": "",
            "category": "snack",
            "prices": "60 грн / 200 грам"
          },
          {
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
            "id": "Мойва фрі",
            "name": "Мойва фрі",
            "inStock": false,
            "gallery": [
              "Moiva.png",
           ],
            "description": "",
            "category": "snack",
            "prices": "55 грн"
          },
           {
            "id": "Деруни з грибочками",
            "name": "Деруни з грибочками",
            "inStock": false,
            "gallery": [
              "Derun.png",
           ],
            "description": "Картопляні деруни з золотистою скоринкою",
            "category": "snack",
            "prices": "45 грн"
          },
          {
            "id": "Українська закуска",
            "name": "Українська закуска",
            "inStock": true,
            "gallery": [
            "UA.png" 
            ],
            "description": "Оселедець з цибулею та кортоплею",
            "category": "snack",
            "prices": "50 грн"
          },
          {
            "id": "Канапки ~до горілочки~",
            "name": "Канапки ~до горілочки~",
            "inStock": false,
            "gallery": [
              "Kanapki.png",
           ],
            "description": "Хрумкі грінки, оселедець та французька гірчиця",
            "category": "snack",
            "prices": "50 грн"
          },
          {
            "id": "Козацька закуска",
            "name": "Козацька закуска",
            "inStock": true,
            "gallery": [
            "Kozak.png" 
            ],
            "description": "Хрумкі грінки помазані ніжною пастою з сала",
            "category": "snack",
            "prices": "55 грн"
          },
          {
            "id": "Брускети з паштетом",
            "name": "Брускети з паштетом",
            "inStock": true,
            "gallery": [
            "Pasha.png" 
            ],
            "description": "Брускети та кульки з ніжним курячим паштетом та кисло-солодким соусом",
            "category": "snack",
            "prices": "55 грн"
          },
          {
            "id": "Мега-Шаурма",
            "name": "Мега-Шаурма",
            "inStock": true,
            "gallery": [
            "Mega.png" 
            ],
            "description": "Соковита, ароматна шаурма з курячим філе, овочами та соусом",
            "category": "snack",
            "prices": "60 грн"
          },
          {
            "id": "Лаваш з сосискою",
            "name": "Лаваш з сосискою",
            "inStock": true,
            "gallery": [
            "LavashS.png" 
            ],
            "description": "",
            "category": "snack",
            "prices": "55 грн"
          },
          {
            "id": "Лаваш з моцареллою та зеленню",
            "name": "Лаваш з моцареллою та зеленню",
            "inStock": true,
            "gallery": [
            "LavashM.png" 
            ],
            "description": "",
            "category": "snack",
            "prices": "65 грн"
          },
          {
            "id": "Хот дог",
            "name": "Хот дог",
            "inStock": true,
            "gallery": [
            "Hotdog.png" 
            ],
            "description": "Гарячий хот-дог з сосискою та соусами",
            "category": "snack",
            "prices": "50 грн"
          },
          {
            "id": "Картопля фрі",
            "name": "Картопля фрі",
            "inStock": true,
            "gallery": [
            "Fri.png" 
            ],
            "description": "Картопля фрі з соусом",
            "category": "snack",
            "prices": "55 грн"
          },
          {
            "id": "Картопля по селянськи / з беконом",
            "name": "Картопля по селянськи / з беконом",
            "inStock": true,
            "gallery": [
            "FriV.png" 
            ],
            "description": "Картопля по селянськи з соусом / з беконом",
            "category": "snack",
            "prices": "55 / 60 грн"
          },
           {
            "id": "Чіпси Lavash",
            "name": "Чіпси Lavash",
            "inStock": false,
            "gallery": [
              "LavashCh.png",
           ],
            "description": "Чіпси з лаваша до пива",
            "category": "snack",
            "prices": "35 грн"
          },
           {
            "id": "Сухарики з часником",
            "name": "Сухарики з часником",
            "inStock": false,
            "gallery": [
              "Flint.png",
           ],
            "description": "Чудова закуска до пива",
            "category": "snack",
            "prices": "40 грн/150 грам"
          },
           {
            "id": "Овочі гриль",
            "name": "Овочі гриль",
            "inStock": false,
            "gallery": [
              "VGril.png",
           ],
            "description": "Перелік овочів: болгарський перець, кабачок, баклажан, грибочки",
            "category": "snack",
            "prices": "70 грн"
          },
           {
            "id": "Скумбрія гриль",
            "name": "Скумбрія гриль",
            "inStock": false,
            "gallery": [
              "Skumbria.png",
           ],
            "description": "",
            "category": "snack",
            "prices": "65 грн"
          },
           {
            "id": "Нарізка асорті",
            "name": "Нарізка асорті",
            "inStock": false,
            "gallery": [
              "Asorti.png",
           ],
            "description": "Нарізка асорті напівкопчена ковбаса та сир",
            "category": "snack",
            "prices": "140 грн"
          },
           {
            "id": "М’ясна тарілка",
            "name": "М’ясна тарілка",
            "inStock": false,
            "gallery": [
              "Meat.png",
           ],
            "description": "Чотири види м’ясних делікатесів",
            "category": "snack",
            "prices": "170 грн / 300 грам"
          },
           {
            "id": "Жуль’єн",
            "name": "Жуль’єн",
            "inStock": false,
            "gallery": [
              "Zulen.png",
           ],
            "description": "Жарена курочка, жарені грибочки та цибулька в вершковому соусі під сиром",
            "category": "snack",
            "prices": "95 грн"
          },
           {
            "id": "Вареники з картопею/капустою/лівером",
            "name": "Вареники з картопею/капустою/лівером",
            "inStock": true,
            "gallery": [
            "Varenuku.png" 
            ],
            "description": "",
            "category": "snack",
            "prices": "40/40/50  грн"
          },
           {
            "id": "Пельмені",
            "name": "Домашні пельмені",
            "inStock": true,
            "gallery": [
            "Pelmeni.png" 
            ],
            "description": "",
            "category": "snack",
            "prices": "50 грн"
          },
           {
            "id": "Соковитий чебурек Beef/Pork/Cheese",
            "name": "Соковитий чебурек Beef/Pork/Cheese",
            "inStock": true,
            "gallery": [
            "Cheburek.png" 
            ],
            "description": "Гарячий,соковитий чебурек з яловичиною та кінзою/з свининою/сиром та зеленню",
            "category": "snack",
            "prices": "40/40/35  грн"
          },{
            "id": "Бендерики",
            "name": "Бендерики",
            "inStock": true,
            "gallery": [
            "Bender.png" 
            ],
            "description": "",
            "category": "snack",
            "prices": "45 грн"
           },
           {
            "id": "Млинці з начинкою курка та гриби",
            "name": "Млинці з начинкою курка та гриби",
            "inStock": true,
            "gallery": [
            "BlinMC.png" 
            ],
            "description": "",
            "category": "snack",
            "prices": "50 грн"
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
            "description": "Курячі крильця, нагетси, картопля фрі, цибулеві кільця",
            "category": "set",
            "prices": "170 грн"
          },
          {
            "id": "Сет до пива",
            "name": "Сет до пива",
            "inStock": true,
            "gallery": [
              "SetB.png"],
            "description": "Ковбаски гриль, сухарики з часником, картопля по-селянськи, свинячі вушка",
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
            "PizzaH.png" 
            ],
            "description": "Гаряча піцца з ананасами, курочкою, кукурудзою та шинкою, час приготування 30хв",
            "category": "pizza",
            "prices": "165 грн"
          },
          {
            "id": "Pizza BBQ",
            "name": "Pizza BBQ",
            "inStock": true,
            "gallery": [
            "PizzaB.png" 
            ],
            "description": "Гаряча піцца з мисливськими ковбасками, грибами та маринованою цибулею та соусом барбекю, час приготування 30хв",
            "category": "pizza",
            "prices": "160 грн"
          },
          {
            "id": "Pizza More",
            "name": "Pizza More",
            "inStock": true,
            "gallery": [
            "PizzaM.png" 
            ],
            "description": "Гаряча піцца з морепродуктами, час приготування 30хв",
            "category": "pizza",
            "prices": "180 грн"
          },
          {
            "id": "Pizza Фірмова",
            "name": "Pizza Фірмова",
            "inStock": true,
            "gallery": [
            "PizzaF.png" 
            ],
            "description": "Гаряча піцца з двома видами ковбаси, грибами та момідорами, час приготування 30хв",
            "category": "pizza",
            "prices": "155 грн"
          },
          {
            "id": "Pizza 4 Cheese",
            "name": "Pizza 4 Cheese",
            "inStock": true,
            "gallery": [
            "Pizza4C.png" 
            ],
            "description": "Гаряча піцца з 4 видами сиру, горішками та грушею, час приготування 30хв",
            "category": "pizza",
            "prices": "160 грн"
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
            "description": "Бургер з котлетою з соковитої курочки",
            "category": "burger",
           "prices": "80 грн"
          },
          {
            "id": "Burger-Texas",
            "name": "Burger-Texas",
            "inStock": true,
            "gallery": [
           "BurgerT.png"],
            "description": "Бургер з котлетою з ароматної свинини та яловичини",
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
            "description": "Салат з помідорами, огірками, сиром фета, маслинами, травами та оливковою олією",
            "category": "salad",
            "prices": "90 грн / 300 грам"
          },   {
            "id": "Салат цезар",
            "name": "Салат цезар з куркою",
            "inStock": true,
            "gallery": [
           "Cesar.png"],
            "description": "Салат з листям салату Айзберг, помідорами, сиром пармезан, куркою, яйцями та соусом Цезар",
            "category": "salad",
            "prices": "120 грн / 280 грам"
          },   {
            "id": "Салат цезар з креветками",
            "name": "Салат цезар з креветками",
            "inStock": true,
            "gallery": [
           "CesarSr.png"],
            "description": "Салат з листям салату Айзберг, помідорами, сиром пармезан, криветками, яйцями та соєво-гірчичним соусом",
            "category": "salad",
            "prices": "150 грн / 280 грам"
          },   {
            "id": "Салат від шефа",
            "name": "Салат від шефа",
            "inStock": true,
            "gallery": [
           "SaladSh.png"],
            "description": "Салат з морковкою по-корейськи, свинячими вушками, зеленим горошком та соусом",
            "category": "salad",
            "prices": "60 грн / 250 грам"
          },
           {
            "id": "Овочевий салат",
            "name": "Овочевий салат",
            "inStock": true,
            "gallery": [
           "SaladV.png"],
            "description": "Салат з помідором, огірком зеленню та капустою",
            "category": "salad",
            "prices": "50 грн / 200 грам"
          }
          // {
          //   "id": "Салат з качкою та карамелізованими яблуками",
          //   "name": "Салат з качкою та карамелізованими яблуками",
          //   "inStock": true,
          //   "gallery": [
          //  ""],
          //   "description": "Салат з качкою та карамелізованими яблуками",
          //   "category": "salad",
          //   "prices": "120 грн / 280 грам"
          // }
        ]
      },
            {
        "name": "М’ясні страви",
         "products": [
           {
            "id": "Стейк з свинної корейки",
            "name": "Стейк з свинної корейки",
            "inStock": true,
            "gallery": [
           "SteakP.png"],
            "description": "Ароматний, соковитий стейк з свинної корейки середньої прожарки",
            "category": "meat",
            "prices": "45 грн / 100 грам"
          },    {
            "id": "Стейк курячий",
            "name": "Стейк курячий",
            "inStock": true,
            "gallery": [
           "SteakC.png"],
            "description": "Апетний, соковитий стейк курячий, середньої прожарки",
            "category": "meat",
            "prices": "35 грн / 100 грам"
          }
        ]
      },
      // {
      //   "name": "Передзамовлення",
      //   "products": [ 
      //   ]
      // },     
      {
        "name": "Десерти",
        "products": [
          {
            "id": "Морозиво в асортименті",
            "name": "Морозиво в асортименті",
            "inStock": true,
            "gallery": [
              "IceCream.png"
            ],
            "description": "Морозиво в асортименті (ріжок або порційно)",
            "category": "dessert",
           "prices": "30 грн / 100 грам"
          },
          {
            "id": "Морозиво полуничний чізкейк",
            "name": "Морозиво полуничний чізкейк",
            "inStock": true,
            "gallery": [
              "IceCreamS.png"
            ],
            "description": "Морозиво в ріжку полуничний чізкейк Мonaco",
            "category": "dessert",
           "prices": "35 грн / 100 грам"
          },{
            "id": "Сирники",
            "name": "Сирники",
            "inStock": true,
            "gallery": [
              "Surnuk.png"
            ],
            "description": "Найкращі сирники, як в бабусі",
            "category": "dessert",
           "prices": "40 грн"
          },{
            "id": "Млинці з начинкою творог/ізюм",
            "name": "Млинці з начинкою творог/ізюм",
            "inStock": true,
            "gallery": [
              "Blin.png"
            ],
            "description": "Млинці з начинкою творог та ізюм",
            "category": "dessert",
           "prices": "35 грн"
          },
          {
            "id": "Пана-кота",
            "name": "Пана-кота",
            "inStock": true,
            "gallery": [
              "Panakota.png"
            ],
            "description": "Смачний пудинг, солодка панакота",
            "category": "dessert",
           "prices": "35 грн"
          }
        ]
      },
      {
        "name": "Напої/коктейлі",
        "products": [
          {
            "id": "Латте",
            "name": "Латте",
            "inStock": true,
            "gallery": [
              "Latte.png"
            ],
            "description": "",
            "category": "drinks",
           "prices": "22 грн / 250 мл, 27 грн / 350 мл"
          },
          {
            "id": "Американо",
            "name": "Американо / Американо з молоком",
            "inStock": true,
            "gallery": [
              "Americano.png"
            ],
            "description": "",
            "category": "drinks",
           "prices": "14 грн / 180 мл, 17 грн / 180 мл"
          },
          {
            "id": "Капучіно",
            "name": "Капучіно",
            "inStock": true,
            "gallery": [
              "Capuchino.png"
            ],
            "description": "",
            "category": "drinks",
           "prices": "22 грн / 250 мл, 27 грн / 350 мл"
          },{
            "id": "Еспрессо",
            "name": "Еспрессо",
            "inStock": true,
            "gallery": [
              "Espresso.png"
            ],
            "description": "",
            "category": "drinks",
           "prices": "12 грн / 110 мл"
          },{
            "id": "Чай Greenfield в асортименті",
            "name": "Чай Greenfield в асортименті",
            "inStock": true,
            "gallery": [
              "Tea.png"
            ],
            "description": "",
            "category": "drinks",
           "prices": "10 грн / 250 мл"
          },
          {
            "id": "Космополітен",
            "name": "Космополітен",
            "inStock": true,
            "gallery": [
              "Kosmo.png"
            ],
            "description": "Горілка, лікер Triple Sec, лимонний фреш, журавлиний сік",
            "category": "drinks",
           "prices": "50 грн / 110 мл"
          },
          {
            "id": "Снукер",
            "name": "Снукер",
            "inStock": true,
            "gallery": [
              "Snooker.png"
            ],
            "description": "Горілка, лікер Melon, сироп Caramel, журавлиновий морс",
            "category": "drinks",
           "prices": "50 грн / 180 мл"
          },
          {
            "id": "Секс на пляжі",
            "name": "Секс на пляжі",
            "inStock": true,
            "gallery": [
              "Sex.png"
            ],
            "description": "Горілка, лікер Peach, апельсиновий сік, журавлиновий сік",
            "category": "drinks",
           "prices": "60 грн / 200 мл"
          },
          {
            "id": "Піна колада",
            "name": "Піна колада",
            "inStock": true,
            "gallery": [
              "Pina.png"
            ],
            "description": "Ром світлий, сироп Pina Colada, ананасовий сік",
            "category": "drinks",
           "prices": "60 грн / 150 мл"
          },
          {
            "id": "Рожевий лимонад",
            "name": "Рожевий лимонад",
            "inStock": true,
            "gallery": [
              "Pink.png"
            ],
            "description": "Горілка, лікер Triple Sec, морс, лимонний фреш, сік лаймy, содова",
            "category": "drinks",
           "prices": "60 грн / 210 мл"
          },
          {
            "id": "Камікадзе",
            "name": "Камікадзе",
            "inStock": true,
            "gallery": [
              "Kamikadze.png"
            ],
            "description": "Горілка, лікер Triple Sec, сік лайму",
            "category": "drinks",
           "prices": "45 грн / 90 мл"
          },
          {
            "id": "Хвиля Малібу",
            "name": "Хвиля Малібу",
            "inStock": true,
            "gallery": [
              "Malibu.png"
            ],
            "description": "Текіла, лікер Triple Sec, лікер Blue curacao, цукровий сироп, лимонний сік",
            "category": "drinks",
           "prices": "50 грн / 110 мл"
          },
          {
            "id": "Американський виноград",
            "name": "Американський виноград",
            "inStock": true,
            "gallery": [
              "AmericanG.png"
            ],
            "description": "Текіла, лікер Triple Sec, виноградний сік, содова",
            "category": "drinks",
           "prices": "60 грн / 225 мл"
          },
          {
            "id": "Алігатор",
            "name": "Алігатор",
            "inStock": true,
            "gallery": [
              "Aligator.png"
            ],
            "description": "Горілка, лікер Triple Sec, сироп диня, апельсиновий сік, лимонний сік, содова",
            "category": "drinks",
           "prices": "50 грн / 180 мл"
          },
          {
            "id": "Джангл Джус",
            "name": "Джангл Джус",
            "inStock": true,
            "gallery": [
              "Jungl.png"
            ],
            "description": "Джин, лікер Pisang, лимонний фреш, апельсиновий сік",
            "category": "drinks",
           "prices": "60 грн / 190 мл"
          },
          {
            "id": "Рідка Марихуана",
            "name": "Рідка Марихуана",
            "inStock": true,
            "gallery": [
              "Mary.png"
            ],
            "description": "Ром світлий, лікер Coconut, лікер Curacao, лікер Green Aplle, сік лайма або лимона, ананасовий сік",
            "category": "drinks",
           "prices": "65 грн / 160 мл"
          },
          {
            "id": "Апероль з віскі",
            "name": "Апероль з віскі",
            "inStock": true,
            "gallery": [
              "Aperol.png"
            ],
            "description": "Віскі, апероль, лимонний фреш, содова",
            "category": "drinks",
           "prices": "70 грн / 110 мл"
          },
          {
            "id": "Апероль з апельсиновим соком",
            "name": "Апероль з апельсиновим соком",
            "inStock": true,
            "gallery": [
              "AperolJ.png"
            ],
            "description": "Апероль, апельсиновий сік",
            "category": "drinks",
           "prices": "50 грн / 100 мл"
          },
          {
            "id": "Челсі сайдкар",
            "name": "Челсі сайкар",
            "inStock": true,
            "gallery": [
              "Chelsi.png"
            ],
            "description": "Джин, лікер Triple Sec, лимонний сік",
            "category": "drinks",
           "prices": "40 грн / 60 мл"
          },
          {
            "id": "Синій понеділок",
            "name": "Синій понеділок",
            "inStock": true,
            "gallery": [
              "BlueMonday.png"
            ],
            "description": "Горілка, лікер Triple Sec, лікер Blue curacao",
            "category": "drinks",
           "prices": "45 грн / 40 мл"
          },
             {
            "id": "Сайдкар",
            "name": "Сайдкар",
            "inStock": true,
            "gallery": [
              "Sidecar.png"
            ],
            "description": "Бренді, лікер Curacao, лимонний сік",
            "category": "drinks",
           "prices": "45 грн / 90 мл"
          },
             {
            "id": "Самбука Ларнака",
            "name": "Самбука Ларнака",
            "inStock": true,
            "gallery": [
              "Sambuka.png"
            ],
            "description": "Самбука, лікер Triple Sec, апельсиновий сік",
            "category": "drinks",
           "prices": "50 грн / 150 мл"
          },
          {
            "id": "Бажання Анни",
            "name": "Бажання Анни",
            "inStock": true,
            "gallery": [
              "Anna.png"
            ],
            "description": "Ром темний, лікер Triple Sec, ананасовий сік",
            "category": "drinks",
           "prices": "60 грн / 220 мл"
          },
          {
            "id": "Гавайський",
            "name": "Гавайський",
            "inStock": true,
            "gallery": [
              "Havai.png"
            ],
            "description": "Джин, лікер Triple Sec, ананасовий сік",
            "category": "drinks",
           "prices": "55 грн / 90 мл"
          },
          {
            "id": "Велика кахуна",
            "name": "Велика кахуна",
            "inStock": true,
            "gallery": [
              "Kahuna.png"
            ],
            "description": "Джин, лікер Triple Sec, солодкий вермут, ананасовий сік",
            "category": "drinks",
           "prices": "45 грн / 135 мл"
          } ,
          {
            "id": "Біла леді",
            "name": "Біла леді",
            "inStock": true,
            "gallery": [
              "White.png"
            ],
            "description": "Джин, лікер Triple Sec, лимонний сік",
            "category": "drinks",
           "prices": "35 грн / 100 мл"
          },
          // {
          //   "id": "Брендбар",
          //   "name": "Брендбар",
          //   "inStock": true,
          //   "gallery": [
          //     "Brend.png"
          //   ],
          //   "description": "",
          //   "category": "drinks",
          //  "prices": "40 грн /50 мл"
          // },
          {
            "id": "B-53",
            "name": "B-53",
            "inStock": true,
            "gallery": [
              "B53.png"
            ],
            "description": "Шот - Абсент, крем лікер Via Lattea, лікер Creme de cafe",
            "category": "drinks",
           "prices": "40 грн / 50 мл"
          },
          {
            "id": "Хіросіма",
            "name": "Хіросіма",
            "inStock": true,
            "gallery": [
              "Hirosima.png"
            ],
            "description": "Абсент Vincent, Крем-лікер Via Lattea, Самбука Ibiza, сироп Grenadine",
            "category": "drinks",
           "prices": "40 грн / 50 мл"
          },{
            "id": "Зелений мексиканець",
            "name": "Зелений мексиканець",
            "inStock": true,
            "gallery": [
              "Green.png"
            ],
            "description": "Текіла, лимонний фреш, лікер Pisang",
            "category": "drinks",
           "prices": "40 грн / 50 мл"
          }
        ]
      },
      {
        "name": "Інші послуги",
        "products": [
          {
            "id": "Більярд",
            "name": "Більярд",
            "inStock": true,
            "gallery": [
              "Biliard.png"
            ],
            "description": "",
            "category": "event",
           "prices": " грн"
          },
          {
            "id": "Кальян",
            "name": "Кальян",
            "inStock": true,
            "gallery": [
              ".png"
            ],
            "description": "",
            "category": "event",
           "prices": " грн"
          },{
            "id": "Ігрова приставка Microsoft Xbox",
            "name": "Ігрова приставка Microsoft Xbox",
            "inStock": true,
            "gallery": [
              "XBox.png"
            ],
            "description": "",
            "category": "event",
           "prices": " грн"
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

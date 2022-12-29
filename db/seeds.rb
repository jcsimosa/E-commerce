
Product.destroy_all
Review.destroy_all
User.destroy_all


puts("seeding")

User.create(name: "Jose Simosa", email: "jose@gmail.com",address: "kaiwiki pl",password: "12345")

Review.create(comment: "great product", user_id: 1, product_id:1)

Product.create(name: "Dyson Cool AM07 Air Multiplier Tower Fan, White/Silver", description: "The Dyson AM07 Air Multiplier Tower Fan will tuck into most any corner to provide whisper-quiet, yet high-velocity, air flow. Engineered to create a powerful, smooth stream of air using less energy, air is drawn in from its surroundings and quietly pushed through the bladeless design. With an oscillating tower, 10 distinct airflow settings, LED digital display, sleep timer with preset intervals, and a magnetized remote control that stores on the fan, you can create the perfect environment in any room. Safely and easily clean this fan without the worry of a standard fan grille and without spinning blades.", price: 12.55, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWbia8icO1hlP8v4y4nhJxDZj0ewXIILX_8XnW5diVAtrzWOxAx0cyc0VDgQ2xh_H7K38-8pSNjyw&usqp=CAc")
Product.create(name: "PlayStation 5 Console", description: "The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.", price: 536, img: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$")
Product.create(name: "YETI Rambler 14 oz Mug, Vacuum Insulated, Stainless Steel with MagSlider Lid, Stainless", description: "The YETI Rambler family is tough as hell, and will keep your drinks as cold (or hot) as science allows. With stainless steel construction, double-wall vacuum insulation, and No Sweat Design, they’re perfect for on-the-move adventures in the backcountry and long days on the water alike. Plus they’re dishwasher safe. From insulated Bottles and Tumblers to Mugs and Jugs, get the Rambler Drinkware that suits your next day out.", price: 536, img: "https://cdn.shopify.com/s/files/1/0301/4023/5913/products/seamfoam.jpg?v=1652192926")
Product.create(name: "Apple iPhone 14, 128GB, Midnight - Unlocked (Renewed)", description: "The iPhone 14 features a vibrant 6.1-inch XDR display, an improved camera system with faster A15 Bionic chip that delivers better low-light performance and a faster and brighter TrueDepth camera with autofocus. On the video front, there's a new Action mode for super steady footage. Add in some handy safety features like crash detection and Emergency SOS via satellite, and you have a formidable flagship.", price: 800, img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51g+V0qtUkL._AC_SX679_.jpg")


puts("done seeding")
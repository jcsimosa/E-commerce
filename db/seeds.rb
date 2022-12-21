
Product.destroy_all
Review.destroy_all
User.destroy_all


puts("seeding")

User.create(name: "Jose Simosa", email: "jose@gmail.com",address: "kaiwiki pl",password: "12345")

Review.create(comment: "great product", user_id: 1, product_id:1)

Product.create(name: "Dyson Cool AM07 Air Multiplier Tower Fan, White/Silver", description: "The Dyson AM07 Air Multiplier Tower Fan will tuck into most any corner to provide whisper-quiet, yet high-velocity, air flow. Engineered to create a powerful, smooth stream of air using less energy, air is drawn in from its surroundings and quietly pushed through the bladeless design. With an oscillating tower, 10 distinct airflow settings, LED digital display, sleep timer with preset intervals, and a magnetized remote control that stores on the fan, you can create the perfect environment in any room. Safely and easily clean this fan without the worry of a standard fan grille and without spinning blades.", price: 12.55, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWbia8icO1hlP8v4y4nhJxDZj0ewXIILX_8XnW5diVAtrzWOxAx0cyc0VDgQ2xh_H7K38-8pSNjyw&usqp=CAc")
Product.create(name: "PlayStation 5 Console", description: "The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.", price: 536, img: "https://m.media-amazon.com/images/I/51051FiD9UL.jpg")



puts("done seeding")
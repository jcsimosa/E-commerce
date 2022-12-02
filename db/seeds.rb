
Product.destroy_all
Review.destroy_all
User.destroy_all


puts("seeding")

User.create(name: "Jose Simosa", email: "jose@gmail.com",address: "kaiwiki pl",password: "12345")

Review.create(comment: "great product", user_id: 1, product_id:1)

Product.create(name: "Fan", description: "powerfull 3-speed fan that will refresh every corner of your room", price: 12.55, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWbia8icO1hlP8v4y4nhJxDZj0ewXIILX_8XnW5diVAtrzWOxAx0cyc0VDgQ2xh_H7K38-8pSNjyw&usqp=CAc")
Product.create(name: "Ps5", description: "Inmersive console that will provide hours of fun for you and your friends", price: 536, img: "https://m.media-amazon.com/images/I/51051FiD9UL.jpg")



puts("done seeding")
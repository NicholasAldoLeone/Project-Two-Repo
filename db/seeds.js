const db = require("../models");

db.sequelize.sync({ force: true }).then(function() {
  db.Product.create({}).then(function() {
    db.Product.create({
      product_name: "Baseball Bat",
      product_department: "Sporting Goods",
      product_cost: 300,
      total_stock: 50,
      product_image: "/images/product_images/baseball_bat.jpg",
      product_description: "This is a high quality maple wood bat!"
    });
    db.Product.create({
      product_name: "Baseball Glove",
      product_department: "Sporting Goods",
      product_cost: 150,
      total_stock: 75,
      product_image: "/images/product_images/baseball_glove.jpg",
      product_description: "This is a genuine baseball glove that is the same model used by Major League players!"
    });
    db.Product.create({
      product_name: "Baseketball",
      product_department: "Sporting Goods",
      product_cost: 50,
      total_stock: 1000,
      product_image: "/images/product_images/basketball.jpg",
      product_description: "An NBA quality baseketball."
    });
    db.Product.create({
      product_name: "Bicycle",
      product_department: "Sporting Goods",
      product_cost: 1500,
      total_stock: 10,
      product_image: "/images/product_images/bicycle.jpg",
      product_description: "This is the same type of model racing bicyle used by racers in the Tour de France!"
    });
    db.Product.create({
      product_name: "Bicycle Helmet",
      product_department: "Sporting Goods",
      product_cost: 100,
      total_stock: 50,
      product_image: "/images/product_images/bicycle_helmet.jpg",
      product_description: "This is a concussion proof helmet... as long as you don't fall directly on it..."
    });
    db.Product.create({
      product_name: "Football",
      product_department: "Sporting Goods",
      product_cost: 50,
      total_stock: 500,
      product_image: "/images/product_images/football.jpg",
      product_description: "An NFL quality Football."
    });
    db.Product.create({
      product_name: "Football Helmet",
      product_department: "Sporting Goods",
      product_cost: 100,
      total_stock: 250,
      product_image: "/images/product_images/football_helmet.jpg",
      product_description: "This is the type of helmet that Antonio Brown would not wear."
    });
    db.Product.create({
      product_name: "Hockey Stick",
      product_department: "Sporting Goods",
      product_cost: 75,
      total_stock: 100,
      product_image: "/images/product_images/hockey_stick.jpg",
      product_description: "An NHL quality Hockey Stick."
    });
    db.Product.create({
      product_name: "Lacrosse Stick",
      product_department: "Sporting Goods",
      product_cost: 50,
      total_stock: 100,
      product_image: "/images/product_images/lacrosse_stick.jpg",
      product_description: "If professional Lacrosse was a big deal.. this would be the stick that they would use."
    });
    db.Product.create({
      product_name: "Swimmers Goggles",
      product_department: "Sporting Goods",
      product_cost: 25,
      total_stock: 500,
      product_image: "/images/product_images/swimmers_goggles.jpg",
      product_description: "Incredibly water proof goggles! As long as you don't stay under water too long..."
    });
    db.Product.create({
      product_name: 'Sony 70" Ultra HD TV',
      product_department: "Electronics",
      product_cost: 1200,
      total_stock: 10,
      product_image: "/images/product_images/sony_tv.jpeg",
      product_description: "This is a fine Television, I just couldn't find the equivalent Samsung Model."
    });
    db.Product.create({
      product_name: "Microsoft Surface Pro",
      product_department: "Electronics",
      product_cost: 1500,
      total_stock: 20,
      product_image: "/images/product_images/surface_pro.jpg",
      product_description: "A fine tablet/laptop, keyboard not included..."
    });
    db.Product.create({
      product_name: "Airpods",
      product_department: "Electronics",
      product_cost: 150,
      total_stock: 75,
      product_image: "/images/product_images/airpods.jpeg",
      product_description: "The wireless airbuds that everyone seems to have..."
    });
    db.Product.create({
      product_name: "Google Nest Hub",
      product_department: "Electronics",
      product_cost: 100,
      total_stock: 150,
      product_image: "/images/product_images/google_nest.jpeg",
      product_description: "The Google version of Alexa. Google doesn't give it a human name however..."
    });
    db.Product.create({
      product_name: "iPhone XR",
      product_department: "Electronics",
      product_cost: 750,
      total_stock: 250,
      product_image: "/images/product_images/iphone_xr.png",
      product_description: "Only cool people own this phone."
    });
    db.Product.create({
      product_name: "Ninja Blender",
      product_department: "Appliances",
      product_cost: 60,
      total_stock: 100,
      product_image: "/images/product_images/ninja_blender.jpeg",
      product_description: "Quiet compared to other blenders but unfortunately not as quiet as a Ninja as the name suggests..."
    });
    db.Product.create({
      product_name: "Dyson Vacuum Cleaner",
      product_department: "Appliances",
      product_cost: 300,
      total_stock: 50,
      product_image: "/images/product_images/vacuum_cleaner.jpg",
      product_description: "According to the commercials the ball design makes this easier to manuever."
    });
    db.Product.create({
      product_name: "Arctic King Mini Fridge",
      product_department: "Appliances",
      product_cost: 140,
      total_stock: 25,
      product_image: "/images/product_images/mini_fridge.jpeg",
      product_description: "The king of all mini fridges."
    });
    db.Product.create({
      product_name: "Instant Pot",
      product_department: "Appliances",
      product_cost: 50,
      total_stock: 100,
      product_image: "/images/product_images/instant_pot.jpeg",
      product_description: "A genius invented this way of cooking.. does take a little longer than expected, but with less mess."
    });
    db.Product.create({
      product_name: "Microwave",
      product_department: "Appliances",
      product_cost: 65,
      total_stock: 50,
      product_image: "/images/product_images/microwave.jpeg",
      product_description: "A convinient way of heating up your meals if you're pressed for time."
    });
  });
});

//This file is only required to fill database,
//with some dummy data to enhance readability,

const mongoose = require("mongoose");
const Product = require("./models/product");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/farmStand")
//   .then(() => {
//     console.log("Mongo Seeds Connected!");
//   })
//   .catch((error) => {
//     console.log("Mongo Seeds Connection Error ", error);
//   });

const seedProducts = [
  {
    name: "grapes",
    category: "fruits",
    price: 120,
  },
  {
    name: "apples",
    category: "fruits",
    price: 80,
  },
  {
    name: "guvava",
    category: "fruits",
    price: 70,
  },
  {
    name: "lady finger",
    category: "vegetables",
    price: 40,
  },
  {
    name: "tomato",
    category: "vegetables",
    price: 40,
  },
  {
    name: "potato",
    category: "vegetables",
    price: 30,
  },
  {
    name: "onions",
    category: "vegetables",
    price: 20,
  },
  {
    name: "milk",
    category: "dairy",
    price: 30,
  },
  {
    name: "butter",
    category: "dairy",
    price: 35,
  },
  {
    name: "curd",
    category: "dairy",
    price: 35,
  },
  {
    name: "cheese",
    category: "dairy",
    price: 95,
  },
];

// Product.insertMany(seedProducts)
// .then(data => {
//     console.log('Successfully Inserted many ', data)
// })
// .catch(error => {
//     console.log('LOG error on inserting many ',error)
// })

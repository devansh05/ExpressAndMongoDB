const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Mongo Connected!");
  })
  .catch((error) => {
    console.log("Mongo Connection Error ", error);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//middlewares to use urlencoded
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

const categoriesArr = [
  "All",
  "fruits",
  "vegetables",
  "dairy",
  "exotic fruits",
  "exotic vegetables",
];

app.get("/products", async (req, res) => {
  const { category } = req.query;
  let productList = [];
  //Empty braces to find everything
  if (category === "All" || !category) {
    productList = await Product.find({});
  } else {
    productList = await Product.find({ category: category });
  }

  res.render("products/index", { productList, categoriesArr });
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  // res.send(product);
  res.render("products/show", { product });
});

app.get("/new", async (req, res) => {
  res.render("products/new", { categoriesArr });
});

app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/product/${newProduct._id.toString()}`);
});

app.get("/product/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.render("products/edit", { product, categoriesArr });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.redirect(`/product/${product._id.toString()}`);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id, req.body, {
    runValidators: true,
  });
  res.redirect(`/products`);
});

app.listen(3000, () => {
  console.log("Express app is listening on 3000.....");
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { MongoDbConnection } = require('./helper/db');
require("dotenv").config({})
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/auth",userRoutes)
app.use("/api/products",productRoutes)
MongoDbConnection()
app.get('/', (req,res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
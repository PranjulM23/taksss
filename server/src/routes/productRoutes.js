const express = require('express');
const router = express.Router();
const { createProduct, getAllproducts, addToWishlist } = require('../controllers/productController'); // Adjust the path as necessary
const upload = require("../middlewares/multer");

// Route for creating a product
router.post('/createProducts',upload.array("images"), createProduct);
router.get('/getProducts', getAllproducts);
router.post('/addToWishlist',addToWishlist)

module.exports = router;

const Product = require('../models/productModel'); // Adjust the path as necessary
const wishlistModel = require('../models/wishlistModel');
// const cloudinary = require("../utils/cloudinary")
// Controller for creating a product
exports.createProduct = async (req, res) => {
    try {
        const { name, mrp, quantity,images } = req.body;

        if (!name || !mrp || quantity === undefined) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: name, mrp, quantity."
            });
        }
        // if (!req.files || req.files.length === 0) {
        //     return res.status(400).json({
        //       success: false,
        //       message: "Images are required",
        //     });
        //   }
        const uploadedImages = [];
        //   for (const file of req.files) {
        //     try {
        //       const base64Image = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
        //       const uploadResponse = await cloudinary.uploader.upload(base64Image, {
        //         folder: "properties",
        //       });
        //       uploadedImages.push(uploadResponse.secure_url);
        //     } catch (uploadError) {
        //       console.error("Error uploading image to Cloudinary:", uploadError.message);
        //       return res.status(500).json({
        //         success: false,
        //         message: "Error uploading images",
        //       });
        //     }
        //   }
        const newProduct = new Product({
            name,
            mrp,
            quantity,
            images
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: savedProduct,
        });
    } catch (error) {
        console.error("Error during product creation:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


exports.getAllproducts = async (req,res)=>{
    try {
        const products = await Product?.find({});

        return res.status(200).json({products})
    } catch (error) {
        console.error("Error during product creation:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
exports.addToWishlist = async (req,res)=>{
    const {productId} = req?.body;
    try {
        const products = await Product?.find({_id:productId});
        if (!products) {
            return res.status(404).json({ message:"Products Not Found" });
        }

        const addToWoshlist = await wishlistModel?.create({
            productId,
            user_id:res.users.id;
        })
        return res.status(200).json({products})
    } catch (error) {
        console.error("Error during product creation:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

/**
*  @description   Get all products
   @route        Get /api/products
   @access public
*
*/ 
 
 
const getProducts = asyncHandler( async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});


/**
*  @description   Get single product
   @route        Get /api/products/:id
   @access public
*
*/ 


const getProductById = asyncHandler( async (req, res) => { 
    const product = await Product.findById(req.params.id);
    res.json(product);
});

/**
*  @description   Delete a products
   @route        DELETE /api/products/:id
   @access       private/admin
*
*/ 
const deleteProduct = asyncHandler ( async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await Product.deleteOne(product);
        res.json({ message: 'Product deleted'});
    } else {
        res.status(404);
        throw new Error('Product Not Found');
    }
});

export { getProducts, deleteProduct, getProductById }
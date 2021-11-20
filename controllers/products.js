const mongoose = require( 'mongoose' );
const Product = require('../models/Product')

const getProducts = async ( req, res, next ) => {

    try {
        const products = await Product.find();
        res.status( 200 ).json({
            message: `List of Products`,
            products: products
        });
    } catch( error ) {
        error.status = 500;
        return next( error );
    }
};


const postProduct = async ( req, res, next ) => {
    const product = req.body;

    try {
        const updatedProduct = await Product.create( product );
        res.json( updatedProduct );

    } catch( error ) {

        if( error.name === 'ValidationError' ) {
            error.status = 400; // bad request as required fields are missing or not proeprly given
            return next( error )
        }

        error.status = 500;
        next( error );
    }
};

module.exports = {
    getProducts,
    postProduct,
};
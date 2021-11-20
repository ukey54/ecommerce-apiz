const express = require( 'express' );
const { 
    postProduct, 
    getProducts
} = require( '../controllers/products' );


const router = express.Router();


router.post( '/', postProduct );
router.get('/', getProducts)

module.exports = router;
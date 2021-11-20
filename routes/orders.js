const express = require( 'express' );
const { 
    postOrder
} = require( '../controllers/orders' );

const router = express.Router();
router.post( '/', postOrder );

module.exports = router;
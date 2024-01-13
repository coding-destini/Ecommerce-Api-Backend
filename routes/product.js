const router = require('express').Router();
const productContorller  = require('../controller/productController')

//creating Product
router.post('/product/create',productContorller.create)
//Getting all products
router.get('/products',productContorller.ListofProducts)
//deleting a product
router.delete('/delete/:id',productContorller.delete)
//Updating a product
router.put('/update/:id',productContorller.update)
// Search products
router.get('/search', productContorller.searchProducts);

module.exports=router;
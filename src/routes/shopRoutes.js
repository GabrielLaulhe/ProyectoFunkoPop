const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');


router.get('/shop', shopController.shop);
router.get('/shop/item/:id', shopController.findItem);
router.post('/shop/item/:id/add', shopController.addItem);
router.get('/shop/cart', shopController.getCart);
router.post('/shop/cart', shopController.postCart);


module.exports = router;
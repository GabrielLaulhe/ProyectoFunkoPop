const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.getAdmin);
router.get('/admin/create', adminController.getCreate);
router.post('/admin/create', adminController.postCreate);
router.get('/admin/edit/:id', adminController.getEdit);
router.put('/admin/edit/:id', adminController.putEdit);
router.get('/admin/delete/:id', adminController.delete);


module.exports = router;
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const auth = require('../../middleware/auth');

router.route('/')
    .post(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            return await productController.createProduct(res, data);
        } catch (e) {
            next(e);
        }
    })

router.route('/')
    .post(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            return await productController.createProduct(res, data);
        } catch (e) {
            next(e);
        }
    })

router.route('/')
    .get(auth(), async (req, res, next) => {
        try {
            return await productController.listProduct(res);
        } catch (e) {
            next(e);
        }
    })

router.route('/:id')
    .get(auth(), async (req, res, next) => {
        try {
            return await productController.findProduct(res, req.params.id);
        } catch (e) {
            next(e);
        }
    })

router.route('/:category_name/export')
    .get(auth(), async (req, res, next) => {
        try {
            return await productController.findProductByCategoryName(res, req.params.category_name);
        } catch (e) {
            next(e);
        }
    })

router.route('/:category_name/import')
    .post(auth(), async (req, res, next) => {
        try {
            return await productController.createProductForCategory(res, req.params.category_name, req.body.data);
        } catch (e) {
            next(e);
        }
    })

router.route('/:id')
    .put(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            return await productController.updateProduct(res, req.params.id, data);
        } catch (e) {
            next(e)
        }
    })

router.route('/:id')
    .delete(auth(), async (req, res, next) => {
        try {
            return await productController.deleteProduct(res, req.params.id);
        } catch (e) {
            next(e)
        }
    })

module.exports = router

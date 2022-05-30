const express = require('express');
const router = express.Router();
const {jsonSuccess, jsonBadRequest } = require('../util/http');
const productController = require('../controllers/product.controller');
const auth = require('../../middleware/auth');

router.route('/')
    .post(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            const response = await productController.createProduct(data);
            if (response.error) return jsonBadRequest(res, response)

            return jsonSuccess(
                res,
                response
            );
        } catch (e) {
            next(e);
        }
    })

router.route('/')
    .post(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            const response = await productController.createProduct(data);
            if (response.error) return jsonBadRequest(res, response)

            return jsonSuccess(
                res,
                response
            );
        } catch (e) {
            next(e);
        }
    })

router.route('/')
    .get(auth(), async (req, res, next) => {
        try {
            const response = await productController.listProduct();
            if (response.error) return jsonBadRequest(res, response)

            return jsonSuccess(
                res,
                response
            );
        } catch (e) {
            next(e);
        }
    })

router.route('/:id')
    .get(auth(), async (req, res, next) => {
        try {
            const response = await productController.findProduct(req.params.id);
            if (response.error) return jsonBadRequest(res, response)

            return jsonSuccess(
                res,
                response
            );
        } catch (e) {
            next(e);
        }
    })

router.route('/:category_name/export')
    .get(auth(), async (req, res, next) => {
        try {
            const response = await productController.findProductByCategoryName(req.params.category_name);
            if (response.error) return jsonBadRequest(res, response)

            return jsonSuccess(
                res,
                response
            );
        } catch (e) {
            next(e);
        }
    })

router.route('/:category_name/import')
    .post(auth(), async (req, res, next) => {
        try {
            const response = await productController.createProductForCategory(req.params.category_name, req.body.data);
            if (response.error) return jsonBadRequest(res, response)

            return jsonSuccess(
                res,
                response
            );
        } catch (e) {
            next(e);
        }
    })

router.route('/:id')
    .put(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            const response = await productController.updateProduct(req.params.id, data);
            if (response.error) return jsonBadRequest(res, response)

            return jsonSuccess(
                res,
                response
            );
        } catch (e) {
            next(e)
        }
    })

router.route('/:id')
    .delete(auth(), async (req, res, next) => {
        try {
            const response = await productController.deleteProduct(req.params.id);
            if (response.error) return jsonBadRequest(res, response)

            return jsonSuccess(
                res,
                response
            );
        } catch (e) {
            next(e)
        }
    })

module.exports = router

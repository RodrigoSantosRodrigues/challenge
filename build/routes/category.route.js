"use strict";const express = require('express');
const router = express.Router();
const { jsonSuccess, jsonBadRequest } = require('../util/http');
const categoryController = require('../controllers/category.controller');
const auth = require('../middleware/auth');

router.route('/')
    .post(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            const response = await categoryController.createCategory(data);
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
            const response = await categoryController.listCategory();
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
            const response = await categoryController.findCategory(req.params.id);
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
            const response = await categoryController.updateCategory(req.params.id, data);
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
            const response = await categoryController.deleteCategory(req.params.id);
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

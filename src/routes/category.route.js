const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const auth = require('../../middleware/auth');

router.route('/')
    .post(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            return await categoryController.createCategory(res, data);
        } catch (e) {
            next(e);
        }
    })

router.route('/')
    .get(auth(), async (req, res, next) => {
        try {
            return await categoryController.listCategory(res);
        } catch (e) {
            next(e);
        }
    })

router.route('/:id')
    .get(auth(), async (req, res, next) => {
        try {
            return await categoryController.findCategory(res, req.params.id);
        } catch (e) {
            next(e);
        }
    })

router.route('/:id')
    .put(auth(), async (req, res, next) => {
        try {
            const { data } = req.body;
            return await categoryController.updateCategory(res, req.params.id, data);
        } catch (e) {
            next(e)
        }
    })

router.route('/:id')
    .delete(auth(), async (req, res, next) => {
        try {
            return await categoryController.deleteCategory(res, req.params.id);
        } catch (e) {
            next(e)
        }
    })

module.exports = router

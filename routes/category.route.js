const express = require('express')
const router = express.Router()
const {
    jsonSuccess
} = require('../util/http')

router.route('/')
    .post(async (req, res, next) => {
        try {
            const { data } = req.body

            return jsonSuccess(res, data)
        } catch (e) {
            next(e)
        }
    })

router.route('/:id')
    .get(async (req, res, next) => {
        try {
            const  id = req.params.id

            return jsonSuccess(res, {
                data: id
            })
        } catch (e) {
            next(e)
        }
    })

router.route('/:id')
    .put(async (req, res, next) => {
        try {
            const id = req.params.id

            return jsonSuccess(res, id)
        } catch (e) {
            next(e)
        }
    })

router.route('/:id')
    .delete(async (req, res, next) => {
        try {
            const id = req.params.id

            return jsonSuccess(res, id)
        } catch (e) {
            next(e)
        }
    })

module.exports = router

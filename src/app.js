const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { jsonError } = require('./util/http')
const categoryRouter = require('./routes/category.route')
const productRouter = require('./routes/product.route')

const homeRouter = express.Router()

homeRouter.route('/').get((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    return res.json({status: 'OK'})
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api-docs', express.static('docs'))

app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use('/', homeRouter)


app.use(jsonError)

module.exports = app

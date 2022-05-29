module.exports = {
    jsonSuccess(res, data) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.json(data)
    },
    jsonCreated(res, data) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 201
        res.json(data)
    },
    jsonDeleted(res) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.json({GONE: true})
    },
    jsonNotFound(res) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404
        res.json({error: 'Not Found'})
    },
    jsonError(err, req, res, next) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 500
        res.json({error: err.name, message: err.message})
        console.error(err)
    },
    jsonUnauthorized(res) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 401
        res.json({error: 'Unauthorized'})
    },
    jsonForbidden(res) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 403
        res.json({error: 'Forbidden'})
    },
    jsonBadRequest(res, error=false) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 400
        let response = {error: 'Bad Request'}
        if (error){
            response = {...response, ...error}
        }
        res.json(response)
    }
}

const { jsonUnauthorized, jsonForbidden } = require('../src/util/http')

module.exports = () => {
    return async (req, res, next) => {
        try {
            const token = req.headers['x-api-token'];
            if (!token) return jsonUnauthorized(res)

            if (token !== 'xxx') return jsonForbidden(res)
            next()
        } catch (e) {
            console.trace(e)
            return jsonUnauthorized(res)
        }
    }
}

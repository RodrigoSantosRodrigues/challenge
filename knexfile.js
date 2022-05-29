require('dotenv').config()

module.exports = {
    client: 'postgresql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        connectTimeout: 30000
    },
    pool: {
        min: 2,
        max: 30
    },
    migrations: {
        directory: __dirname + '/database/migrations'
    },
    seeds: {
        directory: __dirname + '/database/seeds',
        loadExtensions: ['.js'],
    },
    useNullAsDefault: true
}

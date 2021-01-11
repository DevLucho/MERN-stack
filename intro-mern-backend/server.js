require('dotenv').config() // para usar lo que esta en .env
const app = require('./app')
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')


async function initApp(appConfig, dbConfig) {
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    } catch (error) {
        console.error(error)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)
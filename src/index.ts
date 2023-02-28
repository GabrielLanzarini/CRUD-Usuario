import { AppDataSource } from "./DataSource"
import express from "express"
import routes from "./routes"
import cookie from "cookie-parser"

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(cookie())
    app.use(express.json())

    app.use(routes)

    return app.listen(process.env.PORT)
})

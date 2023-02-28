import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pessoa } from "./model/Pessoa"
import { default1677587838212 as Migration } from "./migrations/1677587838212-default"

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA,
    entities: [Pessoa],
    migrations: [Migration]
})

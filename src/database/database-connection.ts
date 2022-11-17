import "dotenv/config";
import { Sequelize } from "sequelize";

const database = process.env.DB_USERNAME as string;
const username = process.env.DB_USERNAME as string;
const password = process.env.DB_PASSWORD as string;
const host = process.env.DB_HOST as string;

export const connection = new Sequelize(database, username, password, {
  host: host,
  dialect: "postgres",
});

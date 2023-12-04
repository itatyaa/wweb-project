import { Sequelize } from "sequelize";

const db = new Sequelize('db_web2', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
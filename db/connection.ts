import { Sequelize } from "sequelize";

const db = new Sequelize('ts_restserver', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
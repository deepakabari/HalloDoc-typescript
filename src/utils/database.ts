import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize("halloDoc-ts", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;
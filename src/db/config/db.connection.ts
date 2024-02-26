import { Sequelize } from "sequelize-typescript";
import path from "path";
import {
    Account,
    AccountRole,
    AccountUserRole,
    Admin,
    Region,
    AdminRegion,
    Physician,
    Role,
    Request,
    RequestStatusLog,
    User,
} from "../models/index";
import dotenv from "dotenv";
dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "mysql",
    define: {
        freezeTableName: true,
    },
    models: [
        Account,
        AccountRole,
        AccountUserRole,
        Admin,
        Region,
        AdminRegion,
        Physician,
        Role,
        Request,
        RequestStatusLog,
        User,
    ],
});

export const dbConnection = async (): Promise<Sequelize> => {
    await sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully.");
        })
        .catch((err: Error) =>
            console.log("Unable to connect to the database.", err)
        );
    return sequelize;
};

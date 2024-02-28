import AppError from "../utils/errorHandler";
import httpCode from "../constants/http.constant";
import messageConstant from "../constants/message.constant";
import { Request, RequestType } from "../db/models/index";
import bcrypt from "bcrypt";
import { Controller } from "../interfaces";
import userSchema from "../validations/user.valid";
import dotenv from "dotenv";
import sequelize from "sequelize";
dotenv.config();

export const getNewPatient: Controller = async (req, res) => {
    try {
        const newPatient = await Request.findAll({
            attributes: [
                [
                    sequelize.fn(
                        "CONCAT",
                        sequelize.col("firstName"),
                        " ",
                        sequelize.col("lastName")
                    ),
                    "Name",
                ],
                ["dob", "Date Of Birth"],
                [
                    sequelize.fn('CONCAT',
                        sequelize.col('RequestType.name'), " ", sequelize.col('Request.firstName')
                    ),
                    "Requestor",
                ],
                ["createdAt", "Requested Date"],
                ["phoneNumber", "Phone"],
                [
                    sequelize.fn(
                        "CONCAT",
                        sequelize.col("street"),
                        ", ",
                        sequelize.col("city"),
                        ", ",
                        sequelize.col("state"),
                        ", ",
                        sequelize.col("zipCode")
                    ),
                    "Address",
                ],
                ["patientNote", "Notes"],
            ],
            include: [
                {
                    model: RequestType,
                    as: "requestType",
                    attributes: [],
                    where: { deletedAt: null },
                },
            ],
            where: {
                deletedAt: null,
            },
        });

        return res.json({
            status: httpCode.OK,
            message: messageConstant.SUCCESS,
            data: newPatient,
        });
    } catch (error: any) {
        return AppError(error, req, res);
    }
};

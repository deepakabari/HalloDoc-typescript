import AppError from "../utils/errorHandler";
import httpCode from "../constants/http.constant";
import messageConstant from "../constants/message.constant";
import { User, Account } from "../db/models/index";
import { Controller } from "../interfaces";
import bcrypt from "bcrypt";
import userSchema from "../validations/user.valid";
import dotenv from "dotenv";
import {RequestType} from '../utils/enum.constants'
dotenv.config();

const ITERATION = process.env.ITERATION;

export const createUser: Controller = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) {
            return res.status(httpCode.UNPROCESSABLE_CONTENT).json({
                status: httpCode.UNPROCESSABLE_CONTENT,
                message: error,
            });
        }

        const {
            userName,
            password,
            firstName,
            lastName,
            email,
            phoneNumber,
            street,
            city,
            state,
            zipCode,
            dob,
        } = req.body;

        const existingUser = await Account.findOne({
            where: { email },
        });

        if (existingUser) {
            return res.status(httpCode.CONFLICT).json({
                status: httpCode.CONFLICT,
                message: messageConstant.USER_ALREADY_EXISTS,
            });
        }

        const hashedPassword = await bcrypt.hash(password, Number(ITERATION));

        const newAccount = await Account.create({
            userName,
            password: hashedPassword,
            email,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const newUser = await User.create({
            firstName,
            accountId: newAccount.id,
            lastName,
            email,
            phoneNumber,
            street,
            city,
            state,
            zipCode,
            dob,
            regionId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        if (newAccount || newUser) {
            return res.json({
                status: httpCode.OK,
                message: messageConstant.USER_CREATED,
                data: newAccount,
            });
        } else {
            throw new Error('Failed to create user and account.');
        }
    } catch (error: any) {
        return AppError(error, req, res);
    }
};

export const createRequest: Controller = async(req, res) => {
    try {
        const {
            userName,
            firstName,
            lastName,
            phoneNumber,
            dob,
            email,
            password,
            status,
            street,
            city,
            state,
            zipCode,
            patientNote,
        } = req.body

        const requestTypeId = RequestType.Patient;

        let existingUser  = await Account.findOne({
            where: { email }
        })

        if(!existingUser) {
            createUser
        }

        const newRequest = await Request.create({
            requestTypeId,
            userId: req.user.id,
        })

    } catch ( error: any ) {
        return AppError(error, req, res);
    }
}
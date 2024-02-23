import { Table, Column, Model, HasOne } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {
    RequestAttributes,
    RequestCreationAttributes,
} from "../../interfaces/";
import RequestStatusLog from "./requeststatuslog.model";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "request",
})
class Request extends Model<RequestAttributes, RequestCreationAttributes> {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    })
    id: number;

    @Column({
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    RequestTypeId: number;

    @Column({
        allowNull: true,
        type: DataTypes.INTEGER,
    })
    UserId?: number;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    FirstName?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    LastName?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    PhoneNumber?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    Email?: string;

    @Column({
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    Status: number;

    @Column({
        allowNull: true,
        type: DataTypes.INTEGER,
    })
    PhysicianId?: number;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    ConfirmationNumber?: string;

    @Column({
        allowNull: true,
        type: DataTypes.BOOLEAN,
    })
    IsDeleted?: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    DeclinedBy?: string;

    @Column({
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    IsUrgentEmailSent: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.DATE,
    })
    LastWellnessDate?: Date;

    @Column({
        allowNull: true,
        type: DataTypes.BOOLEAN,
    })
    IsMobile?: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.BOOLEAN,
    })
    CallType?: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.BOOLEAN,
    })
    CompletedByPhysician?: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.DATE,
    })
    LastReservationDate?: Date;

    @Column({
        allowNull: true,
        type: DataTypes.DATE,
    })
    AcceptedDate?: Date;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    RelationName?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    CaseNumber?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    CaseTag?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    CaseTagPhysician?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    PatientAccountId?: string;

    @Column({
        allowNull: true,
        type: DataTypes.INTEGER,
    })
    CreatedUserId?: number;

    @HasOne(() => RequestStatusLog)
    requestStatusLog: RequestStatusLog;
}

export default Request;

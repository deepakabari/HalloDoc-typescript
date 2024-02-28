import {
    Table,
    Column,
    Model,
    HasOne,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {
    RequestAttributes,
    RequestCreationAttributes,
} from "../../interfaces/";
import { Physician, RequestType } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
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
    requestTypeId: number;

    @Column({
        allowNull: true,
        type: DataTypes.INTEGER,
    })
    userId: number;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    firstName: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    lastName: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    phoneNumber: string;

    @Column({
        allowNull: false,
        type: DataTypes.DATEONLY,
    })
    dob: Date;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    email: string;

    @Column({
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    status: number;

    @Column({
        allowNull: false,
        type: DataTypes.STRING,
    })
    street: string;

    @Column({
        allowNull: false,
        type: DataTypes.STRING,
    })
    city: string;

    @Column({
        allowNull: false,
        type: DataTypes.STRING,
    })
    state: string;

    @Column({
        allowNull: false,
        type: DataTypes.STRING,
    })
    zipCode: string;

    @Column({
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    patientNote: number;

    @Column({
        allowNull: true,
        type: DataTypes.INTEGER,
    })
    physicianId?: number;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    confirmationNumber?: string;

    @Column({
        allowNull: true,
        type: DataTypes.BOOLEAN,
    })
    isDeleted?: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    declinedBy?: string;

    @Column({
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    isUrgentEmailSent: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.DATE,
    })
    lastWellnessDate?: Date;

    @Column({
        allowNull: true,
        type: DataTypes.BOOLEAN,
    })
    callType?: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.BOOLEAN,
    })
    completedByPhysician?: boolean;

    @Column({
        allowNull: true,
        type: DataTypes.DATE,
    })
    lastReservationDate?: Date;

    @Column({
        allowNull: true,
        type: DataTypes.DATE,
    })
    acceptedDate?: Date;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    relationName?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    caseNumber?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    caseTag?: string;

    @Column({
        allowNull: true,
        type: DataTypes.STRING,
    })
    caseTagPhysician?: string;

    @HasOne(() => RequestType, { foreignKey: "id", sourceKey: "requestTypeId" })
    requestType: RequestType;

    @BelongsTo(() => Physician, { foreignKey: "physicianId", targetKey: "id" })
    physician: Physician;
}

export default Request;

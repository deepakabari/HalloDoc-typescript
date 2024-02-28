import {
    Table,
    Column,
    Model,
    HasOne,
    HasMany,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { Account, Region, Role, Request } from "./index";
import {
    PhysicianAttributes,
    PhysicianCreationAttributes,
} from "../../interfaces";

@Table({
    timestamps: true,
    paranoid: true,
})
class Physician extends Model<
    PhysicianAttributes,
    PhysicianCreationAttributes
> {
    @Column({
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    })
    id: number;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    accountId: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    firstName: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    lastName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    email: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    phoneNumber: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    medicalLicense: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    photo: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    adminNotes: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isAgreementDoc: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isBackgroundDoc: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isTrainingDoc: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isNonDisclosureDoc: boolean;

    @Column({ type: DataTypes.STRING, allowNull: true })
    address1: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    address2: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    city: string;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    regionId: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    zipCode: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    altPhone: string;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    status: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    businessName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    businessWebsite: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isDeleted: boolean;

    @Column({ type: DataTypes.INTEGER, allowNull: true })
    roleId: number;

    @Column({ type: DataTypes.STRING, allowNull: true })
    NPINumber: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isLicenseDoc: boolean;

    @Column({ type: DataTypes.STRING, allowNull: true })
    signature: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isCredentialDoc: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isTokenGenerate: boolean;

    @Column({ type: DataTypes.STRING, allowNull: true })
    syncEmailAddress: string;

    @HasOne(() => Account, { foreignKey: "id", sourceKey: "accountId" })
    account: Account;

    @HasOne(() => Region, { foreignKey: "id", sourceKey: "regionId" })
    region: Region;

    @HasOne(() => Role, { foreignKey: "id", sourceKey: "roleId"})
    role: Role;

    @HasMany(() => Request, { foreignKey: "physicianId", sourceKey: "id"})
    requests: Request[]
}

export default Physician;

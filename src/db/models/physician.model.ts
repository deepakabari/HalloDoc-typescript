import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {Account,  Region, Role } from "./index";
import {
    PhysicianAttributes,
    PhysicianCreationAttributes,
} from "../../interfaces";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "Physician",
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
    PhysicianId: number;

    @ForeignKey(() => Account)
    @Column({ type: DataTypes.STRING, allowNull: true })
    AccountUserId: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    FirstName: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    LastName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Email: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Mobile: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    MedicalLicense: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Photo: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    AdminNotes: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsAgreementDoc: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsBackgroundDoc: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsTrainingDoc: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsNonDisclosureDoc: boolean;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Address1: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Address2: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    City: string;

    @ForeignKey(() => Region)
    @Column({ type: DataTypes.INTEGER, allowNull: true })
    RegionId: number;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Zip: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    AltPhone: string;

    @ForeignKey(() => Account)
    @Column({ type: DataTypes.STRING, allowNull: false })
    CreatedBy: string;

    @Column({ type: DataTypes.DATE, allowNull: false })
    CreatedDate: Date;

    @ForeignKey(() => Account)
    @Column({ type: DataTypes.STRING, allowNull: true })
    ModifiedBy: string;

    @Column({ type: DataTypes.DATE, allowNull: true })
    ModifiedDate: Date;

    @Column({ type: DataTypes.INTEGER, allowNull: true })
    Status: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    BusinessName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    BusinessWebsite: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsDeleted: boolean;

    @ForeignKey(() => Role)
    @Column({ type: DataTypes.INTEGER, allowNull: true })
    RoleId: number;

    @Column({ type: DataTypes.STRING, allowNull: true })
    NPINumber: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsLicenseDoc: boolean;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Signature: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsCredentialDoc: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsTokenGenerate: boolean;

    @Column({ type: DataTypes.STRING, allowNull: true })
    SyncEmailAddress: string;

    @Column({ type: DataTypes.DATE, allowNull: true })
    deletedAt: Date;

    @BelongsTo(() => Account)
    accountUser: Account;

    @BelongsTo(() => Region)
    region: Region;

    @BelongsTo(() => Role)
    role: Role;
}

export default Physician;

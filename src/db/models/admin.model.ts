import {
    Table,
    Column,
    Model,
    BelongsTo,
    ForeignKey,
    BelongsToMany,
    HasMany,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { AdminAttributes, AdminCreationAttributes } from "../../interfaces";
import {Account, Region, Role } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "Admin",
})
class Admin extends Model<AdminAttributes, AdminCreationAttributes> {
    @Column({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    })
    id: number;

    @ForeignKey(() => Account)
    @Column({ type: DataTypes.INTEGER, allowNull: false })
    AccountUserId: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    FirstName: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    LastName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Email: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Mobile: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Address1: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Address2: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    City: string;

    @Column({ type: DataTypes.INTEGER, allowNull: true })
    RegionId: number;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Zip: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    AltPhone: string;

    @ForeignKey(() => Account)
    @Column({ type: DataTypes.STRING, allowNull: false })
    CreatedBy: string;

    @ForeignKey(() => Account)
    @Column({ type: DataTypes.STRING, allowNull: true })
    ModifiedBy: string;

    @Column({ type: DataTypes.INTEGER, allowNull: true })
    Status: number;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsDeleted: boolean;

    @ForeignKey(() => Role)
    @Column({ type: DataTypes.INTEGER, allowNull: true })
    RoleId: number;

    @Column({ type: DataTypes.DATE, allowNull: true })
    deletedAt: Date;

    @BelongsTo(() => Account)
    accountUser: Account;

    // @BelongsToMany(() => Region, { through: "AdminRegion" })
    // regions: Region[];

    @BelongsTo(() => Role)
    role: Role;
}

export default Admin;

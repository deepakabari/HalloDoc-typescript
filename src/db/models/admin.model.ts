import {
    Column,
    ForeignKey,
    BelongsTo,
    Model,
    Table,
    HasOne,
} from "sequelize-typescript";
import { AdminAttributes, AdminCreationAttributes } from "../../interfaces";
import { DataTypes } from "sequelize";
import { Account, Region, Role } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
})
class Admin extends Model<AdminAttributes, AdminCreationAttributes> {
    @Column({
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    accountId: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    firstName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    lastName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    email: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    phoneNumber: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    address1: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    address2: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    city: string;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    regionId: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    zipCode: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    altPhone: string;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    status: number;

    @Column({ type: DataTypes.BOOLEAN, allowNull: false })
    isDeleted: boolean;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    roleId: number;

    @HasOne(() => Account, { foreignKey: "id", sourceKey: "accountId" })
    account: Account;
    
    @HasOne(() => Region, { foreignKey: "id", sourceKey: "regionId"})
    region: Region;

    @BelongsTo(() => Role, { foreignKey: "roleId", targetKey: "id"})
    role: Role
}
export default Admin;

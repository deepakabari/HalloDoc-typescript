import {
    Column,
    ForeignKey,
    BelongsTo,
    Model,
    Table,
    HasOne,
} from "sequelize-typescript";
import { AccountAttributes, AccountCreationAttributes } from "../../interfaces";
import { DataTypes } from "sequelize";
import { Admin, User } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "Admin",
})
class Account extends Model<AccountAttributes, AccountCreationAttributes> {
    @Column({
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    userName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    password: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    email: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    resetToken: string;

    @Column({ type: DataTypes.DATE, allowNull: true })
    expireToken: Date;
}

export default Account;

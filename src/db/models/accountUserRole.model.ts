import { Table, Column, Model } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { AccountUserRoleAttributes } from "../../interfaces";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "AccountUserRole",
})
class AccountUserRole extends Model<AccountUserRoleAttributes> {
    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    AccountUserId: number;

    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    AccountRoleId: number;
}

export default AccountUserRole;

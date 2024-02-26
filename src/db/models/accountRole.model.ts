import { Table, Column, Model, BelongsToMany } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {
    AccountRoleAttributes,
    AccountRoleCreationAttributes,
} from "../../interfaces";
import { Account, AccountUserRole } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "AccountRole",
})
class AccountRole extends Model<
    AccountRoleAttributes,
    AccountRoleCreationAttributes
> {
    @Column({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    })
    id: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Name: string;

    // @BelongsToMany(() => AccountUser, {
    //     through: () => AccountUserRole,
    // })
    // userRoles?: AccountUser[];

    @BelongsToMany(
        () => Account,
        () => AccountUserRole,
        "AccountRoleId",
        "AccountUserId"
    )
    AccountRoleId: Account[];
}

export default AccountRole;

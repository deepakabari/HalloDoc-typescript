import {
    Table,
    Column,
    Model,
    BelongsToMany,
    HasMany,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {
    AccountUserAttributes,
    AccountUserCreationAttributes,
} from "../../interfaces";
import { AccountRole, AccountUserRole, Admin, Physician, User } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
})
class Account extends Model<
    AccountUserAttributes,
    AccountUserCreationAttributes
> {
    @Column({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    })
    id: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    userName: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    password: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    email: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    phoneNumber: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    resetToken: string;

    @Column({ type: DataTypes.DATE, allowNull: true })
    expireToken: Date;

    // @BelongsToMany(() => AccountRole, {
    //     through: () => AccountUserRole,
    // })
    // userRoles: AccountRole[];

    // @BelongsToMany(
    //     () => AccountRole,
    //     () => AccountUserRole,
    //     "accountUserId",
    //     "accountRoleId"
    // )
    // userRoles: AccountRole[];

    // @BelongsToMany(() => AccountRole, {through: "AccountUserRole"})
    // userRoles: AccountRole[];

    // @HasMany(() => Admin)
    // admins: Admin[];

    // @HasMany(() => Physician)
    // physicians: Physician[];

    // @HasMany(() => User)
    // users: User[];
}

export default Account;

import {
    Table,
    Column,
    Model,
    BelongsToMany,
    HasMany,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { AccUserAttributes, AccUserCreationAttributes } from "../../interfaces";
import AccRole from "./accrole.model";
import Admin from "./admin.model";
import Physician from "./physician.model";
import User from "./user.model";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "accuser",
})
class AccUser extends Model<AccUserAttributes, AccUserCreationAttributes> {
    @Column({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    })
    id: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    UserName: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Password: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Email: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    PhoneNumber: string;

    @Column({ type: DataTypes.DATE, allowNull: false })
    createdAt: Date;

    @Column({ type: DataTypes.DATE, allowNull: true })
    updatedAt: Date;

    @Column({ type: DataTypes.STRING, allowNull: true })
    resetToken: string;

    @Column({ type: DataTypes.DATE, allowNull: true })
    expireToken: Date;

    // @BelongsToMany(() => AccRole, { through: "AccUserRole" })
    // roles: AccRole[];

    @HasMany(() => Admin)
    admins: Admin[];

    @HasMany(() => Physician)
    physicians: Physician[];

    @HasMany(() => User)
    users: User[];
}

export default AccUser;

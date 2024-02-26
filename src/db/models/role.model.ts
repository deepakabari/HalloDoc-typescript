import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { RoleAttributes, RoleCreationAttributes } from "../../interfaces";
import { Admin, Physician } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "Role",
})
class Role extends Model<RoleAttributes, RoleCreationAttributes> {
    @Column({
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    })
    id: number;

    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
    Name: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
    AccountType: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
    CreatedBy: string;

    @Column({
        type: DataTypes.DATE,
        allowNull: true,
    })
    UpdatedBy: string;

    @Column({
        type: DataTypes.DATE,
        allowNull: false,
    })
    IsDeleted: boolean;

    @Column({ type: DataTypes.DATE, allowNull: true })
    deletedAt: Date;

    @HasMany(() => Admin)
    admins: Admin[];

    @HasMany(() => Physician)
    physicians: Physician[];
}

export default Role;

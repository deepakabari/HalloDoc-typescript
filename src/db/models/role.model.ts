import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { RoleAttributes, RoleCreationAttributes } from "../../interfaces";
import Admin from "./admin.model";
import Physician from "./physician.model";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "role",
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

    @HasMany(() => Admin)
    admins: Admin[];

    @HasMany(() => Physician)
    physicians: Physician[];
}

export default Role;

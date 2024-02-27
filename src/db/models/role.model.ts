import { Table, Column, Model, HasMany, HasOne } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { RoleAttributes, RoleCreationAttributes } from "../../interfaces";
import { Admin } from './index'

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
        type: DataTypes.DATE,
        allowNull: false,
    })
    IsDeleted: boolean;

    @HasOne(() => Admin, { foreignKey: "roleId", sourceKey: "id"})
    admin: Admin;
}

export default Role;

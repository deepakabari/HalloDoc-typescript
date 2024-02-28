import { Table, Column, Model, HasMany, HasOne, BelongsTo } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { RoleAttributes, RoleCreationAttributes } from "../../interfaces";
import { Admin, Physician } from './index'

@Table({
    timestamps: true,
    paranoid: true,
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
    name: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
    accountType: string;

    @Column({
        type: DataTypes.DATE,
        allowNull: false,
    })
    isDeleted: boolean;

    @HasOne(() => Admin, { foreignKey: "roleId", sourceKey: "id"})
    admin: Admin;

    @BelongsTo(() => Physician, { foreignKey: "roleId", targetKey: "id"})
    physician: Physician
}

export default Role;

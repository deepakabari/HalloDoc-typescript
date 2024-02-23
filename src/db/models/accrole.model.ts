import { Table, Column, Model, BelongsToMany } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { AccRoleAttributes, AccRoleCreationAttributes } from "../../interfaces";
import AccUser from './accuser.model';

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "accuser",
})
class AccRole extends Model<AccRoleAttributes, AccRoleCreationAttributes> {
    @Column({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    })
    id: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Name: string;

    // @BelongsToMany(() => AccUser, { through: 'AccUserRole'})
    // users: AccUser[];
}

export default AccRole;

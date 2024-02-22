import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { AccRoleAttributes, AccRoleCreationAttributes } from '../../interfaces';

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

    @Column({ type: DataTypes.STRING, allowNull: false})
    Name: string;
}

export default AccRole;
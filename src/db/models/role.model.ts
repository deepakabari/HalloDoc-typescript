import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from'sequelize';
import { RoleAttributes, RoleCreationAttributes } from '../../interfaces';

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
    autoIncrement: true
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false
  })
  Name: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false
  })
  AccountType: string

  @Column({
    type: DataTypes.STRING,
    allowNull: false
  })
  CreatedBy: string;

  @Column({
    type: DataTypes.DATE,
    allowNull: true
  })
  UpdatedBy: string

  @Column({
    type: DataTypes.DATE,
    allowNull: false
  })
  IsDeleted: boolean
}

export default Role;
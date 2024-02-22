import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from'sequelize';
import { RegionAttributes, RegionCreationAttributes } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "region",
})
class Region extends Model<RegionAttributes, RegionCreationAttributes> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false
  })
  Name: string

  @Column({
    type: DataTypes.STRING,
    allowNull: true
  })
  Abbreviation?: string
}
export default Region;
import { Table, Column, Model, BelongsToMany, HasOne, HasMany } from 'sequelize-typescript';
import { DataTypes } from'sequelize';
import { RegionAttributes, RegionCreationAttributes } from '../../interfaces';
import Admin from './admin.model';
import Physician from './physician.model';

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

  // @BelongsToMany(() => Admin, { through: "AdminRegion" })
  // admins: Admin[];

  @HasMany(() => Physician)
  physicians: Physician[];
}
export default Region;
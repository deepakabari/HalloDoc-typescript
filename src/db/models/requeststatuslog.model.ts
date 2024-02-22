import { Table, Column, Model } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {
    RequestStatusLogAttributes,
    RequestStatusLogCreationAttributes,
} from "../../interfaces";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "requeststatuslog",
})
class RequestStatusLog extends Model<RequestStatusLogAttributes, RequestStatusLogCreationAttributes> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  RequestId: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  status: number

  @Column({
    type: DataTypes.INTEGER,
    allowNull: true,
  })
  PhysicianId: number

  @Column({
    type: DataTypes.INTEGER,
    allowNull: true,
  })
  AdminId: number

  @Column({
    type: DataTypes.INTEGER,
    allowNull: true,
  })
  TransToPhysicianId: number

  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  Notes: string
}
export default RequestStatusLog;
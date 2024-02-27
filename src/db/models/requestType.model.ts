import { Model, Table, Column, HasMany, BelongsTo } from "sequelize-typescript";
import DataTypes from "sequelize";
import {
    RequestTypeAttributes,
    RequestTypeCreationAttributes,
} from "../../interfaces";
import { Request } from '../models/index'

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "RequestType",
})
class RequestType extends Model<
    RequestTypeAttributes,
    RequestTypeCreationAttributes
> {
    @Column({
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    })
    id: number;

    @Column({
        allowNull: false,
        type: DataTypes.STRING,
    })
    name: string;

    @BelongsTo(() => Request, { foreignKey: "requestTypeId", targetKey: "id"})
    request: Request
}

export default RequestType;

import {
    Table,
    Column,
    Model,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {
    RequestStatusLogAttributes,
    RequestStatusLogCreationAttributes,
} from "../../interfaces";
import { Request } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "RequestStatusLog",
})
class RequestStatusLog extends Model<
    RequestStatusLogAttributes,
    RequestStatusLogCreationAttributes
> {
    @Column({
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    })
    id: number;

    @ForeignKey(() => Request)
    @Column({
        type: DataTypes.INTEGER,
        allowNull: false,
    })
    RequestId: number;

    @Column({
        type: DataTypes.INTEGER,
        allowNull: false,
    })
    status: number;

    @Column({
        type: DataTypes.INTEGER,
        allowNull: true,
    })
    PhysicianId: number;

    @Column({
        type: DataTypes.INTEGER,
        allowNull: true,
    })
    AdminId: number;

    @Column({
        type: DataTypes.INTEGER,
        allowNull: true,
    })
    TransToPhysicianId: number;

    @Column({
        type: DataTypes.STRING,
        allowNull: true,
    })
    Notes: string;

    @Column({ type: DataTypes.DATE, allowNull: true })
    deletedAt: Date;

    @BelongsTo(() => Request)
    request: Request;
}
export default RequestStatusLog;

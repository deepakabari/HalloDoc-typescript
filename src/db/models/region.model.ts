import {
    Table,
    Column,
    Model,
    BelongsToMany,
    HasOne,
    HasMany,
    BelongsTo,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { RegionAttributes, RegionCreationAttributes } from "../../interfaces";
import { Admin, Physician, User } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
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
        allowNull: false,
    })
    Name: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: true,
    })
    Abbreviation?: string;

    @BelongsTo(() => Admin, { foreignKey: "id", targetKey: "regionId"})
    admin: Admin;

    @BelongsTo(() => Physician, { foreignKey: "id", targetKey: "regionId"})
    physician: Physician

    @BelongsTo(() => User, { foreignKey: "id", targetKey: "regionId"})
    user: User
}
export default Region;

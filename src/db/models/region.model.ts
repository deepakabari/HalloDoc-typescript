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
    tableName: "Region",
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

    // @HasOne(() => Admin, { foreignKey: "regionId", sourceKey: "id" })
    // admin: Admin;

    @BelongsTo(() => Admin, { foreignKey: "regionId", targetKey: "id"})
    admin: Admin;

    @BelongsTo(() => Physician, { foreignKey: "regionId", targetKey: "id"})
    physician: Physician

    @BelongsTo(() => User, { foreignKey: "regionId", targetKey: "id"})
    user: User
}
export default Region;

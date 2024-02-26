import { Table, Column, Model } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { AdminRegionAttributes } from "../../interfaces";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "AdminRegion",
})
class AdminRegion extends Model<AdminRegionAttributes> {
    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    AdminId: number;

    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    RegionId: number;
}

export default AdminRegion;

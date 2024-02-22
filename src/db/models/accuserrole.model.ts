import { Table, Column, Model } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { AccUserRoleAttributes } from "../../interfaces";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "accuserrole",
})
class AccUserRole extends Model<AccUserRoleAttributes> {
    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    AccUserId: number;

    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    AccRoleId: number;
}

export default AccUserRole;

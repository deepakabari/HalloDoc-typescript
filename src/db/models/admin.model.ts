import { Table, Column, Model } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { AdminAttributes, AdminCreationAttributes } from "../../interfaces";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "admin",
})
class Admin extends Model<AdminAttributes, AdminCreationAttributes> {
    @Column({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    })
    id: number;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    AccUserId: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    FirstName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    LastName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Email: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Mobile: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Address1: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Address2: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    City: string;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    RegionId: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Zip: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    AltPhone: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    CreatedBy: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    ModifiedBy: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Status: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: false })
    IsDeleted: boolean;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    RoleId: number;
}

export default Admin;

import {
    Table,
    Column,
    Model,
    HasOne,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { UserAttributes, UserCreationAttributes } from "../../interfaces";
import { Account, Region } from "./index";

@Table({
    timestamps: true,
    paranoid: true,
})
class User extends Model<UserAttributes, UserCreationAttributes> {
    @Column({
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    })
    id: number;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    accountId: number

    @Column({ type: DataTypes.STRING, allowNull: false })
    firstName: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    lastName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    email: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    phoneNumber: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    street: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    city: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    state: string;

    @Column({ type: DataTypes.INTEGER, allowNull: false })
    regionId: number;

    @Column({ type: DataTypes.STRING, allowNull: false })
    zipCode: string;

    @Column({ type: DataTypes.DATEONLY, allowNull: false })
    dob: Date;

    @Column({ type: DataTypes.INTEGER, allowNull: true })
    status: number;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isDeleted: boolean;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    isRequestWithEmail: boolean;

    @HasOne(() => Account, { foreignKey: "id", sourceKey: "accountId"})
    account: Account;

    @HasOne(() => Region, { foreignKey: "id", sourceKey:"regionId"})
    region: Region;
}

export default User;

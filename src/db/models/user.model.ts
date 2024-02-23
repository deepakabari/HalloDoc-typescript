import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import Region from "./region.model";
import AccUser from "./accuser.model";

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "user",
})
class User extends Model {
    @Column({
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    })
    UserId: number;

    @ForeignKey(() => AccUser)
    @Column({ type: DataTypes.STRING, allowNull: true })
    AccUserId: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    FirstName: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    LastName: string;

    @Column({ type: DataTypes.STRING, allowNull: false })
    Email: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Mobile: string;

    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsMobile: boolean;

    @Column({ type: DataTypes.STRING, allowNull: true })
    Street: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    City: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    State: string;

    @ForeignKey(() => Region)
    @Column({ type: DataTypes.INTEGER, allowNull: true })
    RegionId: number;

    @Column({ type: DataTypes.STRING, allowNull: true })
    ZipCode: string;

    @Column({ type: DataTypes.STRING, allowNull: true })
    strMonth: string;

    @Column({ type: DataTypes.INTEGER, allowNull: true })
    intYear: number;

    @Column({ type: DataTypes.INTEGER, allowNull: true })
    intDate: number;

    @Column({ type: DataTypes.INTEGER, allowNull: true })
    Status: number;
    
    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsDeleted: boolean;
    
    @Column({ type: DataTypes.BOOLEAN, allowNull: true })
    IsRequestWithEmail: boolean;
    
    @ForeignKey(() => AccUser)
    @Column({ type: DataTypes.STRING, allowNull: false })
    CreatedBy: string;

    @Column({ type: DataTypes.DATE, allowNull: false })
    CreatedDate: Date;

    @ForeignKey(() => AccUser)
    @Column({ type: DataTypes.STRING, allowNull: true })
    ModifiedBy: string;


    @Column({ type: DataTypes.DATE, allowNull: true })
    ModifiedDate: Date;

    @BelongsTo(() => AccUser)
    accUser: AccUser;

    @BelongsTo(() => Region)
    region: Region;
}

export default User;

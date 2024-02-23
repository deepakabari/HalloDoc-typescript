import { Optional } from "sequelize";

interface AdminAttributes {
    id: number;
    AccUserId: number;
    FirstName: string;
    LastName?: string;
    Email: string;
    Mobile?: string;
    Address1?: string;
    Address2?: string;
    City?: string;
    RegionId?: number;
    Zip?: string;
    AltPhone?: string;
    CreatedBy: number;
    createdAt: Date;
    ModifiedBy?: number;
    updatedAt?: Date;
    Status?: string;
    IsDeleted?: boolean;
    RoleId?: number;
}

type AdminCreationAttributes = Optional<AdminAttributes, "id">;

export { AdminAttributes, AdminCreationAttributes };
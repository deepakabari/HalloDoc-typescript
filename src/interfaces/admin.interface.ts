import { Optional } from "sequelize";

interface AdminAttributes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address1: string;
    address2: string;
    city: string;
    regionId: number;
    zipCode: string;
    status: string;
    isDeleted: boolean;
    roleId: number;
    altPhone: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}

type AdminCreationAttributes = Optional<AdminAttributes, "id">;

export { AdminAttributes, AdminCreationAttributes };
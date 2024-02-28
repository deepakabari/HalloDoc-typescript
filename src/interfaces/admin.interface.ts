import { Optional } from "sequelize";

interface AdminAttributes {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address1: string;
    address2: string;
    city: string;
    regionId: number;
    zipCode: string;
    altPhone: string
    status: string;
    isDeleted: boolean;
    roleId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}

type AdminCreationAttributes = Optional<AdminAttributes, "id">;

export { AdminAttributes, AdminCreationAttributes };
import { Optional } from 'sequelize';

interface RoleAttributes {
    id: number;
    Name: string;
    AccountType: string;
    CreatedBy: string
    createdAt: string;
    UpdatedBy?: string
    updatedAt?: string
    IsDeleted: boolean
    deletedAt?: Date | null
}

type RoleCreationAttributes = Optional<RoleAttributes, "id">;

export { RoleAttributes, RoleCreationAttributes };
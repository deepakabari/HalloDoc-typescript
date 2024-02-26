import { Optional } from "sequelize";

interface AccountRoleAttributes {
    id: number;
    Name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null
}

type AccountRoleCreationAttributes = Optional<AccountRoleAttributes, "id">;

export { AccountRoleAttributes, AccountRoleCreationAttributes };

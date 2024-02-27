import { Optional } from "sequelize";

interface AccountAttributes {
    id: number
    userName: string
    password: string
    email: string
    resetToken?: string | null
    expireToken?: Date | null
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}

type AccountCreationAttributes = Optional<AccountAttributes, "id">;

export { AccountAttributes, AccountCreationAttributes };
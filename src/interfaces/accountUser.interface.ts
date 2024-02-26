import { Optional }  from 'sequelize';

interface AccountUserAttributes {
    id: number;
    UserName: string
    Password?: string
    Email?: string
    PhoneNumber?: string
    createdAt: Date
    updatedAt?: Date
    resetToken?: string | null
    expireToken?: Date | null
    deletedAt?: Date | null
}

type AccountUserCreationAttributes = Optional<AccountUserAttributes, 'id'>;

export { AccountUserAttributes, AccountUserCreationAttributes };
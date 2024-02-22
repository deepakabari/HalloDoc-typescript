import { Optional }  from 'sequelize';

interface AccUserAttributes {
    id: number;
    UserName: string
    Password: string
    Email: string
    PhoneNumber: string
    createdAt: Date
    updatedAt: Date
    resetToken: string
    expireToken: Date
}

type AccUserCreationAttributes = Optional<AccUserAttributes, 'id'>;

export { AccUserAttributes, AccUserCreationAttributes };
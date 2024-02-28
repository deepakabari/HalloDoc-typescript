import { Optional } from 'sequelize';

interface UserAttributes {
    id: number;
    accountId: number
    firstName: string
    lastName?: string
    email: string
    phoneNumber: string
    street: string
    city: string
    state: string
    regionId: number
    zipCode: string
    dob: Date
    status?: number
    isDeleted?: boolean
    isRequestWithEmail?: boolean
    createdAt?: Date
    updatedAt: Date
    deletedAt?: Date | null
}

type UserCreationAttributes = Optional<UserAttributes, "id">;

export { UserAttributes, UserCreationAttributes };
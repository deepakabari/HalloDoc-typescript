import { Optional } from 'sequelize';

interface UserAttributes {
    id: number;
    firstName: string
    lastName?: string
    email: string
    phoneNumber: string
    street: string
    city: string
    state: string
    regionId: number
    zipCode: string
    strMonth?: string
    intYear?: number
    intDate?: number
    status?: number
    isDeleted?: boolean
    isRequestWithEmail?: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date | null
}

type UserCreationAttributes = Optional<UserAttributes, "id">;

export { UserAttributes, UserCreationAttributes };
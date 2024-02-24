import { Optional } from 'sequelize';

interface UserAttributes {
    id: number;
    AccUserId: number;
    FirstName: string
    LastName?: string
    Email: string
    Mobile?: string
    IsMobile?: boolean
    Street?: string
    City?: string
    State?: string
    RegionId?: number
    ZipCode?: string
    strMonth?: string
    intYear?: number
    intDate?: number
    Status?: number
    IsDeleted?: boolean
    IsRequestWithEmail?: boolean
    CreatedBy: string
    createdAt: Date
    ModifiedBy?: string
    updatedAt?: Date
}

type UserCreationAttributes = Optional<UserAttributes, "id">;

export { UserAttributes, UserCreationAttributes };
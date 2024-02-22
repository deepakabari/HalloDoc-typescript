import { Optional } from 'sequelize';

interface RequestStatusLogAttributes {
    id: number;
    RequestId: number;
    Status: string;
    PhysicianId?: number;
    AdminId?: number;
    TransToPhysicianId?: number;
    Notes?: string
    createdAt: Date
    updatedAt: Date
}

type RequestStatusLogCreationAttributes = Optional<RequestStatusLogAttributes, "id">;

export { RequestStatusLogAttributes, RequestStatusLogCreationAttributes}
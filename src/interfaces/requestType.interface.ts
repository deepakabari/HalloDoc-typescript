import { Optional } from "sequelize";

interface RequestTypeAttributes {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

type RequestTypeCreationAttributes = Optional<RequestTypeAttributes, "id">;

export { RequestTypeAttributes, RequestTypeCreationAttributes };
import { Optional } from "sequelize";

interface AccRoleAttributes {
    id: number;
    Name: string;
    createdAt: Date;
    updatedAt: Date;
}

type AccRoleCreationAttributes = Optional<AccRoleAttributes, "id">;

export { AccRoleAttributes, AccRoleCreationAttributes };

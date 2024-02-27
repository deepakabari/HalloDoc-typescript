import { Optional } from "sequelize";

interface RegionAttributes {
    id: number;
    Name: string;
    Abbreviation?: string
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date | null
}

type RegionCreationAttributes = Optional<RegionAttributes, "id">;

export { RegionAttributes, RegionCreationAttributes };
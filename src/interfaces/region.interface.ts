import { Optional } from "sequelize";

interface RegionAttributes {
    id: number;
    Name: string;
    Abbreviation?: string
    deletedAt?: Date | null
}

type RegionCreationAttributes = Optional<RegionAttributes, "id">;

export { RegionAttributes, RegionCreationAttributes };
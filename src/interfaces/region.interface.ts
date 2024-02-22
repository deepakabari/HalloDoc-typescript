import { Optional } from "sequelize";

interface RegionAttributes {
    id: number;
    Name: string;
    Abbreviation?: string
}

type RegionCreationAttributes = Optional<RegionAttributes, "id">;

export { RegionAttributes, RegionCreationAttributes };
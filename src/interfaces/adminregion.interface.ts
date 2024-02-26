import { Optional } from "sequelize";

interface AdminRegionAttributes {
    AdminId: number;
    RegionId: number;
    deletedAt?: Date | null
}

export { AdminRegionAttributes };
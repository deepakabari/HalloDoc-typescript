import { Optional } from 'sequelize';

interface PhysicianAttributes {
    id: number;
    AccountUserId?: number;
    FirstName: string
    LastName?: string
    Email: string
    Mobile?: string
    MedicalLicense?: string
    Photo?: string
    AdminNotes?: string
    IsAgreementDoc?: boolean
    IsBackgroundDoc?: boolean
    IsTrainingDoc?: boolean
    IsNonDisclosureDoc?: boolean
    Address1?: string
    Address2?: string
    City?: string
    RegionId?: number
    Zip?: string
    AltPhone?: string
    Status?: number
    BusinessName: string
    BusinessWebsite: string
    IsDeleted?: boolean
    RoleId?: number
    NPINumber?: string
    IsLicenseDoc?: boolean
    Signature?: string
    IsCredentialDoc?: boolean
    IsTokenGenerate?: boolean
    SyncEmailAddress?: string
    CreatedBy: string
    createdAt: Date
    ModifiedBy?: string
    updatedAt?: Date
    deletedAt?: Date | null
}

type PhysicianCreationAttributes = Optional<PhysicianAttributes, "id">;

export { PhysicianAttributes, PhysicianCreationAttributes };
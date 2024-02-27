import { Optional } from 'sequelize';

interface PhysicianAttributes {
    id: number;
    firstName: string
    lastName?: string
    email: string
    phoneNumber: string
    medicalLicense: string
    photo?: string
    adminNotes?: string
    isAgreementDoc?: boolean
    isBackgroundDoc?: boolean
    isTrainingDoc?: boolean
    isNonDisclosureDoc?: boolean
    address1?: string
    address2?: string
    city: string
    regionId: number
    zipCode: string
    altPhone?: string
    status: number
    businessName: string
    businessWebsite: string
    isDeleted?: boolean
    roleId: number
    NPINumber?: string
    isLicenseDoc?: boolean
    signature?: string
    isCredentialDoc?: boolean
    isTokenGenerate?: boolean
    syncEmailAddress?: string
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date | null
}

type PhysicianCreationAttributes = Optional<PhysicianAttributes, "id">;

export { PhysicianAttributes, PhysicianCreationAttributes };
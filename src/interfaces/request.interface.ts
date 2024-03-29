import { Optional } from "sequelize";

interface RequestAttributes {
    id: number;
    requestTypeId: number;
    userId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dob: Date
    email: string;
    status: string;
    street: string
    city: string
    state: string
    zipCode: string
    patientNote?: string
    physicianId?: number;
    confirmationNumber?: string;
    isDeleted?: boolean;
    declinedBy?: number;
    isUrgentEmailSent: boolean;
    lastWellnessDate?: Date;
    callType?: number;
    completedByPhysician?: boolean;
    lastReservationDate?: Date;
    acceptedDate?: Date;
    relationName?: string;
    caseNumber?: string;
    caseTag?: string;
    caseTagPhysician?: string;
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date | null
}

type RequestCreationAttributes = Optional<RequestAttributes, "id">;

export { RequestAttributes, RequestCreationAttributes };
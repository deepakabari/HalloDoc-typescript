import { Optional } from "sequelize";

interface RequestAttributes {
    id: number;
    RequestTypeId: number;
    UserId?: number;
    FirstName?: string;
    LastName?: string;
    PhoneNumber?: string;
    Email?: string;
    Status: string;
    PhysicianId?: number;
    ConfirmationNumber?: string;
    IsDeleted?: boolean;
    DeclinedBy?: string;
    IsUrgentEmailSent: boolean;
    LastWellnessDate?: Date;
    IsMobile?: boolean;
    CallType?: number;
    CompletedByPhysician?: boolean;
    LastReservationDate?: Date;
    AcceptedDate?: Date;
    RelationName?: string;
    CaseNumber?: string;
    CaseTag?: string;
    CaseTagPhysician?: string;
    PatientAccountId?: string
    CreatedUserId?: number
    createdAt: Date
    updatedAt?: Date
    deletedAt?: Date | null
}

type RequestCreationAttributes = Optional<RequestAttributes, "id">;

export { RequestAttributes, RequestCreationAttributes };
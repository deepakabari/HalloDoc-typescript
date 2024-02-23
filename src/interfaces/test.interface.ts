import { Optional }  from 'sequelize';

interface TestAttributes {
    id: number;
    UserName: string
    Password?: string
    Email: string
    PhoneNumber?: string
    createdAt: Date
    updatedAt?: Date
    resetToken?: string | null
    expireToken?: Date | null
}

type TestCreationAttributes = Optional<TestAttributes, 'id'>;

export { TestAttributes, TestCreationAttributes };
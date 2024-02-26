"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Physician", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            AccUserId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            FirstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            LastName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            Email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            Mobile: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            MedicalLicense: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            Photo: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            AdminNotes: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            IsAgreementDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            IsBackgroundDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            IsTrainingDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            IsNonDisclosureDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            Address1: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            Address2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            City: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            RegionId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            Zip: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            AltPhone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            Status: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            BusinessName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            BusinessWebsite: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            IsDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            RoleId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            NPINumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            IsLicenseDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            Signature: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            IsCredentialDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            IsTokenGenerate: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            SyncEmailAddress: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            CreatedBy: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            ModifiedBy: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Physician");
    },
};

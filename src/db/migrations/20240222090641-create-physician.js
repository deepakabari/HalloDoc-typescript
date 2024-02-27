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
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            medicalLicense: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            photo: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            adminNotes: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            isAgreementDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            isBackgroundDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            isTrainingDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            isNonDisclosureDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            address1: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            address2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            regionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            zipCode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            altPhone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            businessName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            businessWebsite: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            roleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            NPINumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            isLicenseDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            signature: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            isCredentialDoc: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            isTokenGenerate: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            syncEmailAddress: {
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

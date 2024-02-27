"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Request", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            requestTypeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            physicianId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            confirmationNumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            declinedBy: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            isUrgentEmailSent: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            lastWellnessDate: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            callType: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            completedByPhysician: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            lastReservationDate: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            acceptedDate: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            relationName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            caseNumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            caseTag: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            caseTagPhysician: {
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
        await queryInterface.dropTable("Request");
    },
};

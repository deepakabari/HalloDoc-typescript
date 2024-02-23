"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Requests", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            RequestTypeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            UserId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            FirstName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            LastName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            PhoneNumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            Email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            Status: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            PhysicianId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            ConfirmationNumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            IsDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            DeclinedBy: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            IsUrgentEmailSent: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            LastWellnessDate: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            IsMobile: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            CallType: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            CompletedByPhysician: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            LastReservationDate: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            AcceptedDate: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            RelationName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            CaseNumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            CaseTag: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            CaseTagPhysician: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            PatientAccountId: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            CreatedUserId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Requests");
    },
};

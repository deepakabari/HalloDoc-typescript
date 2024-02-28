"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("User", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            accountId: {
                type: Sequelize.STRING,
                allowNull: false
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
            street: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
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
            dob: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            isRequestWithEmail: {
                type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable("User");
    },
};

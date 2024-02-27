"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Admin", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            email: {
                type: Sequelize.STRING,
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
            address1: {
                type: Sequelize.STRING,
                allowNull: false,
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
                allowNull: false,
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            roleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        await queryInterface.dropTable("Admin");
    },
};
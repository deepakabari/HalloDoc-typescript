"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("AccountUser", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            UserName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            Password: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            Email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            PhoneNumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            resetToken: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            expireToken: {
                type: Sequelize.DATE,
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
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("AccountUser");
    },
};

"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Role", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            Name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            AccountType: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            CreatedBy: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            UpdatedBy: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            IsDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
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
        await queryInterface.dropTable("Role");
    },
};

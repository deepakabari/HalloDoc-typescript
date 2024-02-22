"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Roles", {
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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            UpdatedBy: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            IsDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Roles");
    },
};

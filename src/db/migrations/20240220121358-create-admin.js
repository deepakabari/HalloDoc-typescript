"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Admins", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            AccUserId: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
            CreatedBy: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            ModifiedBy: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            Status: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            IsDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            RoleId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Admins");
    },
};

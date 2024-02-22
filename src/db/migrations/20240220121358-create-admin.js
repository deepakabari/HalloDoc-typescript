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
                allowNull: false,
            },
            Email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            Mobile: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            Address1: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            Address2: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            City: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            RegionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            Zip: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            AltPhone: {
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
            ModifiedBy: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            Status: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            IsDeleted: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            RoleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Admins");
    },
};

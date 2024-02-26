"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("AdminRegion", {
            AdminId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            RegionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
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
    async down(queryInterface) {
        await queryInterface.dropTable("AdminRegion");
    },
};

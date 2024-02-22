'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AccUserRoles', {
      AccUserId: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true
      },
      AccRoleId: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('AccUserRoles');
  }
};
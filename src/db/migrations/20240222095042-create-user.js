'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AccUserId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      FirstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Mobile: {
        type: Sequelize.STRING,
        allowNull: true
      },
      IsMobile: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      Street: {
        type: Sequelize.STRING,
        allowNull: true
      },
      City: {
        type: Sequelize.STRING,
        allowNull: true
      },
      State: {
        type: Sequelize.STRING,
        allowNull: true
      },
      RegionId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ZipCode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      strMonth: {
        type: Sequelize.STRING,
        allowNull: true
      },
      intYear: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      intDate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      Status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      IsDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      IsRequestWithEmail: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      CreatedBy: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ModifiedBy: {
        type: Sequelize.STRING,
        allowNull: true
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
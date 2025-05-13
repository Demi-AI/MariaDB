const { sequelize, DataTypes } = require('../orm');
const Department = require('./Department');

const Course = sequelize.define('Course', {
    Course_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    Level: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            isIn: [['大學部', '研究所']]
        }
    },
    Hours_Per_Week: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Department_ID: {
        type: DataTypes.CHAR(5),
        Is_Required: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
}, {
    tableName: 'COURSE',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Course;

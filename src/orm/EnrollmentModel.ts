const { sequelize, DataTypes } = require('../orm');
const Student = require('./Student');
const Course = require('./Course');
const Semester = require('./Semester');

const Enrollment = sequelize.define('Enrollment', {
    Student_ID: {
        type: DataTypes.CHAR(9),
        allowNull: false,
        primaryKey: true
    },
    Course_ID: {
        type: DataTypes.CHAR(8),
        allowNull: false,
        primaryKey: true
    },
    Semester_ID: {
        type: DataTypes.CHAR(6),
        allowNull: false,
        primaryKey: true
    },
    Enrollment_Date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Grade: {
        type: DataTypes.DECIMAL(4, 1),
        allowNull: true,
        validate: {
            min: 0,
            max: 100
        }
    },
    Status: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '修課中',
        validate: {
            isIn: [['修課中', '通過', '不通過', '退選']]
        }
    }
}, {
    tableName: 'ENROLLMENT',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Enrollment;
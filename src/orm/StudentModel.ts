const { sequelize, DataTypes } = require('../orm');

const Student = sequelize.define('Student', {
    Student_ID: {
        type: DataTypes.STRING(9),
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Birth_Date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Gender: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        validate: {
            isIn: [['M', 'F']]
        }
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    Phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    Admission_Year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            isIn: [['在學', '休學', '畢業', '退學']]
        }
    },
    Department_ID: {
        type: DataTypes.STRING(5),
        Is_Required: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
}, {
    tableName: 'STUDENT',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Student;
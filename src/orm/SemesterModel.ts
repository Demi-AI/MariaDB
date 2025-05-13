const { sequelize, DataTypes } = require('../orm');

const Semester = sequelize.define('Semester', {
    Semester_ID: {
        type: DataTypes.CHAR(6),
        primaryKey: true
    },
    Year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Term: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            isIn: [['第一學期', '第二學期', '暑期']]
        }
    },
    Start_Date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    End_Date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Registration_Start: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Registration_End: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'SEMESTER',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    indexes: [
        {
            unique: true,
            fields: ['Year', 'Term']
        }
    ],
    validate: {
        startBeforeEnd() {
            if (this.Start_Date >= this.End_Date) {
                throw new Error('Start_Date 必須早於 End_Date');
            }
            if (this.Registration_Start && this.Registration_End &&
                this.Registration_Start >= this.Registration_End) {
                throw new Error('Registration_Start 必須早於 Registration_End');
            }
        }
    }
});

module.exports = Semester;

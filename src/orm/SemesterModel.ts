import { Sequelize, Model, DataTypes, Optional } from "sequelize";
import { DB } from "../app";
import { Student } from "../interfaces/Student";
import { Semester } from "../interfaces/Semester";
import { logger } from "../middlewares/log";

interface SemesterCreationAttribute extends Optional<Semester, 'Semester_ID'> { }
export interface SemesterInstance extends Model<Semester, SemesterCreationAttribute>, Student { }

export const getSemesterModel = () => {
    const instance = DB.sequelize;

    if (instance) {
        return instance.define<SemesterInstance>('Semester', {
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
            modelName: "SEMESTER",
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
                startBeforeEnd(value: Date) {
                    if (value >= (this.End_Date as Date)) {
                        throw new Error('Start_Date 必須早於 End_Date');
                    }
                },
                RegistrationStartBeforeEnd(value: Date) {
                    if (value && this.Registration_End &&
                        (value >= (this.Registration_End as Date))) {
                        throw new Error('Registration_Start 必須早於 Registration_End');
                    }
                }
            }
        });

    } else {
        logger.error("not init")
    }
}
/*
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
*/

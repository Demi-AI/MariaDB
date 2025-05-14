import { Sequelize, Model, DataTypes, Optional } from "sequelize";
import { DB } from "../app";
import { Student } from "../interfaces/Student";
import { Department } from "../interfaces/Department";
import { logger } from "../middlewares/log";

interface DepartmentCreationAttribute extends Optional<Department, 'Department_ID'> { }
export interface DepartmentInstance extends Model<Department, DepartmentCreationAttribute>, Student { }

export const getDepartmentModel = () => {
    const instance = DB.sequelize;

    if (instance) {
        return instance.define<DepartmentInstance>('Department', {
            Department_ID: {
        type: DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Location: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Phone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    Established_Year: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Chair_ID: {
        type: DataTypes.STRING(6),
        allowNull: true
    },
    College: {
        type: DataTypes.STRING(30),
        allowNull: true
    }
}, {
    modelName:"DEPARTMENT",
    tableName: 'DEPARTMENT',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

    } else {
        logger.error("not init")
    }
}


/*
const { sequelize, DataTypes } = require('../orm');

const Department = sequelize.define('Department', {
    Department_ID: {
        type: DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Location: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Phone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    Established_Year: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Chair_ID: {
        type: DataTypes.STRING(6),
        allowNull: true
    },
    College: {
        type: DataTypes.STRING(30),
        allowNull: true
    }
}, {
    tableName: 'DEPARTMENT',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Department;
*/
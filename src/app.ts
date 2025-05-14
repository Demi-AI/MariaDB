import express from 'express'
import {router} from "./Routers"
import { logger } from './middlewares/log';
const http = require('http');
import cors from 'cors';
import { Mariadb } from './utils/Mariadb';
require('dotenv').config()
const app: express.Application = express()
const server = http.createServer(app);

export const DB = new Mariadb();

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200,
  "exposedHeaders": ['Content-Disposition']
}))

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ extended: false }))
app.use('/assets', express.static(process.env.assetsPath as string));

for (const route of router) {
  app.use(route.getRouter())
}

// 設定一對多關係：部門與學生
Department.hasMany(Student, { foreignKey: 'Department_ID' });
Student.belongsTo(Department, { foreignKey: 'Department_ID' });

// 設定一對多關係：部門與課程
Department.hasMany(Course, { foreignKey: 'Department_ID' });
Course.belongsTo(Department, { foreignKey: 'Department_ID' });

// 設定多對多關係：學生與課程，透過 Enrollment
Student.belongsToMany(Course, { 
  through: Enrollment, 
  foreignKey: 'Student_ID',
  otherKey: 'Course_ID'
});

Course.belongsToMany(Student, { 
  through: Enrollment, 
  foreignKey: 'Course_ID',
  otherKey: 'Student_ID'
});

// 一對多：讓 Enrollment 也能被 include
Student.hasMany(Enrollment, { foreignKey: 'Student_ID' });
Enrollment.belongsTo(Student, { foreignKey: 'Student_ID' });

Course.hasMany(Enrollment, { foreignKey: 'Course_ID' });
Enrollment.belongsTo(Course, { foreignKey: 'Course_ID' });


server.listen(process.env.PORT, () => {
  logger.info('listening on *:'+process.env.PORT);
});
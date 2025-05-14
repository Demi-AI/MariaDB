import { getCourseModel } from "./CourseModel";
import { getEnrollmentModel } from "./EnrollmentModel";
import { getSemesterModel } from "./SemesterModel";
import { getStudentModel } from "./StudentModel";

export const setRef = () => {
  const StudentModel = getStudentModel()
  const CourseModel = getCourseModel()
  const SemesterModel = getSemesterModel()
  const EnrollmentModel = getEnrollmentModel();
  if (StudentModel && CourseModel && SemesterModel && EnrollmentModel) {
    StudentModel.hasMany(EnrollmentModel, {
      foreignKey: 'Student_ID',
      as: 'ENROLLMENT'
    });
    CourseModel.hasMany(EnrollmentModel, {
      foreignKey: 'Course_ID',
      as: 'ENROLLMENT'
    });
    EnrollmentModel.belongsTo(StudentModel, {
      foreignKey: 'Student_ID',
      targetKey: 'Student_ID'
    });

    EnrollmentModel.belongsTo(CourseModel, {
      foreignKey: 'Course_ID',
      targetKey: 'Course_ID'
    });
    EnrollmentModel.belongsTo(SemesterModel, {
      foreignKey: 'Semester_ID'
    });
  }
}

/*
const { sequelize } = require('../orm');
const Student = require('./Student');
const Department = require('./Department');
const Course = require('./Course');
const Enrollment = require('./Enrollment');

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

module.exports = {
  sequelize,
  Student,
  Department,
  Course,
  Enrollment
};
*/
export interface Enrollment {
  Student_ID: string;                                // CHAR(9), 外鍵 + 主鍵之一
  Course_ID: string;                                 // CHAR(8), 外鍵 + 主鍵之一
  Semester_ID: string;                               // CHAR(6), 外鍵 + 主鍵之一
  Enrollment_Date: string | Date;                    // DATE, NOT NULL
  Grade?: number | null;                             // DECIMAL(4,1), 可為 NULL 或 0–100
  Status?: '修課中' | '通過' | '不通過' | '退選';     // 預設為 '修課中'
}

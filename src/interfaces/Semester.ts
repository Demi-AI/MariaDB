export interface Semester {
  Semester_ID: string;                          // CHAR(6), 主鍵
  Year: number;                                 // INT, NOT NULL
  Term: '第一學期' | '第二學期' | '暑期';        // VARCHAR(10), 限定值
  Start_Date: string | Date;                    // DATE, NOT NULL
  End_Date: string | Date;                      // DATE, NOT NULL
  Registration_Start?: string | Date | null;    // DATE, 可為 NULL
  Registration_End?: string | Date | null;      // DATE, 可為 NULL
}

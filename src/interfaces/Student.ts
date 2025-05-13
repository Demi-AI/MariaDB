export interface Student {
  Student_ID: string;                          // CHAR(9), 主鍵
  Name: string;                                // VARCHAR(50), NOT NULL
  Birth_Date?: string | Date | null;           // DATE, 可為 NULL
  Gender?: 'M' | 'F' | null;                   // CHAR(1), CHECK 條件
  Email?: string | null;                       // VARCHAR(100), 唯一，可為 NULL
  Phone?: string | null;                       // VARCHAR(15), 可為 NULL
  Address?: string | null;                     // VARCHAR(200), 可為 NULL
  Admission_Year?: number | null;              // INT, 可為 NULL
  Status?: '在學' | '休學' | '畢業' | '退學' | null; // VARCHAR(10), CHECK 條件
  Department_ID?: string | null;               // CHAR(5), 外鍵，可為 NULL
}

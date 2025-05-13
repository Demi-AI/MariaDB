export interface Department {
  Department_ID: string;              // CHAR(5)
  Name: string;                       // VARCHAR(50), NOT NULL
  Location?: string | null;           // VARCHAR(50), 可為 NULL
  Phone?: string | null;              // VARCHAR(15), 可為 NULL
  Established_Year?: number | null;   // INT, 可為 NULL
  Chair_ID?: string | null;           // CHAR(6), 可為 NULL（假設為外鍵）
  College?: string | null;            // VARCHAR(30), 可為 NULL
}

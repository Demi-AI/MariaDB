export interface Course {
  Course_ID: string;               // CHAR(8)
  Title: string;                   // VARCHAR(100)
  Description?: string | null;     // TEXT (可為 null)
  Credits: number;                 // > 0
  Level: '大學部' | '研究所';      // 僅允許兩種字串
  Hours_Per_Week?: number | null;  // 可為 null
  Department_ID: string;   // CHAR(5)，外鍵
}

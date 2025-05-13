import { Contorller } from "../abstract/Contorller";
import { Request, response, Response } from "express";
import { StudentService } from "../Service/StudentService";
import { resp } from "../utils/resp";
import { Student } from "../interfaces/Student";
require('dotenv').config()

export class StudentController extends Contorller {
    protected service: StudentService;

    constructor() {
        super();
        this.service = new StudentService();
    }

    public async read(req: Request, res: Response) {
        const response: resp<Array<Student> | undefined> = {
            code: 200,
            message: "",
            body: undefined
        };
    
        try {
            // 獲取學生數據
            const students = await this.service.read();
    
            if (students && students.length > 0) {
                response.body = students;
                response.message = "Students retrieved successfully.";
                return res.status(200).send(response);
            } else {
                // 如果數據為空
                response.code = 404;
                response.message = "No students found.";
                return res.status(404).send(response);
            }
        } catch (error) {
            // 捕獲服務器錯誤
            console.error("Error retrieving students:", error);
            response.code = 500;
            response.message = "Internal server error.";
            return res.status(500).send(response);
        }
    }
    

    public async create(Request: Request, Response: Response) {
        const resp = await this.service.create(Request.body)
        Response.status(resp.code).send(resp)
    }
    public async delete(Request: Request, Response: Response) {
        const resp = await this.service.delete(Request.query.id as string)
        Response.status(resp.code).send(resp)
    }
    public async update(Request: Request, Response: Response) {
        console.log('Request Body:', Request.body);  // 打印請求的body
        const resp = await this.service.update(Request.body.id,Request.body)
        Response.status(resp.code).send(resp)
    }

}
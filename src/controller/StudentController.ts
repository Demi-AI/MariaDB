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

    public async read(Request: Request, Response: Response) {
        const resp: resp<Array<Student> | undefined> = await this.service.read();
        Response.status(resp.code).send(resp);
    }

    public async create(Request: Request, Response: Response) {
        const resp: resp<Student | undefined> = await this.service.create(Request.body);
        Response.status(resp.code).send(resp);
    }
    public async delete(Request: Request, Response: Response) {
        const resp: resp<Student | undefined> = await this.service.delete(Request.query.Student_ID as string);
        Response.status(resp.code).send(resp);
    }
    public async update(Request: Request, Response: Response) {
        const resp: resp<Student | undefined> = await this.service.update(Request.body)
        Response.status(resp.code).send(resp);
    }

}
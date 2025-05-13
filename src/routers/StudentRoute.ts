import { Route } from "../abstract/Route"
import { StudentController } from "../controller/StudentController";

export class StudentRoute extends Route{
    
    protected url: string;
    protected Contorller = new StudentController();

    constructor(){
        super()
        this.url = '/api/student/'
        this.setRoutes()
    }

    protected setRoutes(): void {
        
        this.router.get(`${this.url}read`,(req, res)=>{
            this.Contorller.read(req, res);
        })

        /**
         * 新增學生
         * request body {
         *  userName: string,
         *  name: string",
         *  department: string,
         *  grade: string,
         *  class: string,
         *  Email: string
         * } 
         * @returns resp<Student>
         */
        this.router.post(`${this.url}create`,(req, res)=>{
            this.Contorller.create(req, res);
        })
        this.router.delete(`${this.url}delete`,(req, res)=>{
            this.Contorller.delete(req, res);
        })
        this.router.put(`${this.url}update`,(req, res)=>{
            this.Contorller.update(req, res);
        })
    }
}
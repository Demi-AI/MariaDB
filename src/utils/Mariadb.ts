import { Sequelize } from "sequelize"
import { logger } from "../middlewares/log";


export class Mariadb {

    public sequelize: Sequelize | null = null;

    constructor() {
        this.sequelize = new Sequelize('university_db',
            process.env.DBUSER as string,
            process.env.DBPASSWORD as string,
            {
                host: process.env.DBHOST,
                port: Number(process.env.DBPORT),
                dialect: 'mariadb'
            }
        );

        this.init();
    }

    private async init() {
        if (this.sequelize) {
            try {
                await this.sequelize.authenticate();
                logger.info(`connected to : jdbc:mariadb://${process.env.DBHOST}:${process.env.DBPORT}/`)
            } catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        }
    }

}

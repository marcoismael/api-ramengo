import express from 'express';
import router from './router';
import morgan from 'morgan'
import cors from 'cors'

require('dotenv').config();

export default class Server {
    server: express.Application;
    constructor(controllers: Array<any>) {
        this.server = express();
        this.middlewares();
        this.router();
        this.startControllers(controllers);
    }

    middlewares(): void {
        this.server.use(express.urlencoded({ extended: false, limit: "50mb" }));
        this.server.use(express.json({limit: '50mb'}));
        this.server.use(express.text({ type: 'text/plain' }));
        this.server.use(cors());
        this.server.use(morgan('dev'));
        this.server.use((req, res, next) => {
            if (!req.get('x-api-key')) {
                var error = new Error("x-api-key header missing");
                res.status(403).json({
                    error: "x-api-key header missing"
                });
                next(error);
            } if (req.get('x-api-key') == process.env.X_API_KEY) {
                next();
            } else {
                var error = new Error("x-api-key header invalid");
                res.status(403).json({
                    error: "x-api-key header invalid"
                });
                next(error);
            };
        });
    };

    router() {
        this.server.use(router);
    };

    startControllers(controllers: Array<any>) {
        controllers.forEach(controller => {
            this.server.use(controller.router);
        });
    };
};
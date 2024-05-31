import { Request, Response, Router } from 'express';
import GetBrothsService from '../service/broths.service';
import logger from '../lib/logger';

export default class GetBrothsController {
    service: GetBrothsService;
    private router: Router;
    constructor(service: GetBrothsService) {
        this.service = service;
        this.router = Router();
        this.startRouters();
    }

    private startRouters() {
        this.router.get('/broths', this.getBroths.bind(this));
    }

    private async getBroths(req: Request, res: Response, next: any) {
        try {
            const response = await this.service.getBroths();
            res.send(response);
        } catch (error) {
            logger.error(`Error: ${error.message}`);
            res.status(500).send({
                error: true,
                message: error.message
            });
            next(error);
        };
    };
};
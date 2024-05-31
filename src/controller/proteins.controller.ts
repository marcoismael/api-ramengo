import { Request, Response, Router } from 'express';
import GetProteinService from '../service/proteins.service';
import logger from '../lib/logger';

export default class GetProteinController {
    service: GetProteinService;
    private router: Router;
    constructor(service: GetProteinService) {
        this.service = service;
        this.router = Router();
        this.startRouters();
    }

    private startRouters() {
        this.router.get('/proteins', this.getProteins.bind(this));
    }

    private async getProteins(req: Request, res: Response, next: any) {
        try {
            const response = await this.service.getProteins();
            res.send(response);
        } catch (error) {
            logger.error(`Error: ${error.message}`);
            res.status(500).json({
                error: true,
                message: error.message
            });
            next(error)
        };
    };
};
import { Request, Router, Response } from 'express';
import GetOrderService from '../service/orders.service';
import logger from '../lib/logger';

export default class GetOrderController {
    service: GetOrderService;
    private router: Router;
    constructor(service: GetOrderService) {
        this.service = service;
        this.router = Router();
        this.startRouters();
    }

    private startRouters() {
        this.router.post('/order', this.getOrder.bind(this));
    }

    private async getOrder(req: Request, res: Response, next: any) {
        try {
            const response = await this.service.getOrder(req);
            if (response == "brothId and proteinId are required") {
                return res.status(400).send({
                    error: "brothId and proteinId are required"
                });
            };
            if (response == "could not place order") {
                return res.status(500).send({
                    error: "could not place order"
                });
            };
            res.send(response);
        } catch (error) {
            logger.error(`Error: ${error.message}`);
            res.status(500).send({
                error: true,
                message: error.message
            });
            next(error)
        };
    };
};
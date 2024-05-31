import { Request, Response } from 'express';
import axios from 'axios';
import logger from '../lib/logger';

export default class Api {
    async getOrder() {
        return new Promise((resolve, reject) => {
            const response = axios({
                url: 'https://api.tech.redventures.com.br/orders/generate-id',
                method: 'POST',
                headers: {
                    'x-api-key': process.env.X_API_KEY
                }
            }).
                then((result: any) => {
                    logger.info(`Order create on id: ${result.data.orderId}`);
                    resolve(result.data.orderId);
                }).
                catch((error)=>{
                    logger.error(`Error on create order: ${error}`);
                    reject(error);
                });
        });
    };
};
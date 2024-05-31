import { Request } from 'express';
import Api from "../repository/api";
import GetBrothsService from './broths.service';
import GetProteinService from './proteins.service';

export default class GetOrderService {
    broths: GetBrothsService;
    proteins: GetProteinService;
    api: Api;
    constructor(api: Api) {
        this.api = api;
        this.broths = new GetBrothsService();
        this.proteins = new GetProteinService();
    }

    async getOrder(req: Request) {
        const {brothId,proteinId} = typeof req.body == 'string' ? JSON.parse(req.body) : req.body

        if(!brothId || !proteinId){
            return "brothId and proteinId are required";
        }
        const brothsRaw = await this.broths.getBroths();
        const proteinsRaw = await this.proteins.getProteins();
        const response = await this.api.getOrder();

        const broths: any = brothsRaw.find((b) => b.id == brothId);
        const proteins = proteinsRaw.find((p) => p.id == proteinId);

        const brothsObject = {...broths};
        const proteinsObject = {...proteins};

        if(brothsObject.id == brothId && proteinsObject.id == proteinId){
            return {
                id: response,
                description: "Salt and Chasu Ramen",
                image: "https://tech.redventures.com.br/icons/ramen/ramenChasu.png",
              };
            }else {
            return "could not place order";
        };
    };
};
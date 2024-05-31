import Server from "./server";
import Api from "./repository/api";
import GetOrderController from "./controller/orders.controller";
import GetOrderService from "./service/orders.service";
import GetBrothsService from "./service/broths.service";
import GetBrothsController from "./controller/broths.controller";
import GetProteinService from "./service/proteins.service";
import GetProteinController from "./controller/proteins.controller";
import logger from "./lib/logger";

async function bootstrap(): Promise<void> {
    const api = new Api();
    const getOrderService = new GetOrderService(api);
    const getOrderController = new GetOrderController(getOrderService);
    const getBrothsService = new GetBrothsService();
    const getBrothsController = new GetBrothsController(getBrothsService);
    const getProteinService = new GetProteinService();
    const getProteinController = new GetProteinController(getProteinService);

    

    const server = new Server([getOrderController, getBrothsController, getProteinController]).server

    server.listen(process.env.PORT, () => {
        logger.info(`Server is running on port ${process.env.PORT}`);
    });
};

bootstrap();
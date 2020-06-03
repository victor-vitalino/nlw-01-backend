import { Router, response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router();

//busca de index
routes.get('/items', ItemsController.index);

// ponto de coleta
routes.get('/points', PointsController.index );
routes.get('/points/:id', PointsController.show );
routes.post('/points', PointsController.create );

export default routes;

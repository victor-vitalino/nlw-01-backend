import { Router, response, request } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import validPoint from './validations/PointValidation'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router();
const uploadImage = multer(multerConfig);

//busca de index
routes.get('/items', ItemsController.index);

// ponto de coleta
routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);

routes.post(
  '/points',
  multer().any(),
  validPoint,
  uploadImage.single('image'),
  PointsController.create
);

export default routes;

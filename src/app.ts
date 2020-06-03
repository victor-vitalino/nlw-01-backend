import express from "express";
import cors from 'cors';
import { resolve } from "path";

import routes from "./routes";

class App {
  server: express.Application;

  constructor() {
    this.server = express();
    this.server.use(cors());    
    this.server.use(express.json());
    this.server.use(
      '/uploads',
      express.static(resolve(__dirname, '..', 'uploads'))
    );

    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
  middlewares() {
    
  }
}

export default new App().server;

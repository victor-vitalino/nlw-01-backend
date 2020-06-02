import express from 'express';

import routes from './routes';

class App{
    server:express.Application;

    constructor(){
        this.server = express();
        this.server.use(express.json());

        this.routes()
    }

    routes(){
        this.server.use(routes);

    }
    middlewares(){}
}

export default new App().server;
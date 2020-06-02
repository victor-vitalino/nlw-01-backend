import {Router} from 'express';

const routes = Router();

routes.get('/users',(req, res)=>{
    res.json([
        'Diego',
        'Victor',
        'Robson',
        'artur'
    ])
})

export default routes;
import Router from "express";
import { listNoti, getNoti, postNoti, putNoti } from "../controlers/controller.notificaciones.js";

const routes = Router();

routes.get('/notis', listNoti);
routes.get('/noti', getNoti);
routes.post('/noti', postNoti);
routes.put('/noti', putNoti);


export default routes;
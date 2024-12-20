import Router from "express";
import { listNoti, getNoti, postNoti } from "../controlers/controler.notificaciones.js";

const routes = Router();

routes.get('/notis', listNoti);
routes.get('/noti', getNoti);
routes.post('/noti', postNoti)

export default routes;
import Router from "express";
import { listNoti, getNoti } from "../controlers/controler.notificaciones.js";

const routes = Router();

routes.get('/notis', listNoti);
routes.get('/noti', getNoti);

export default routes;
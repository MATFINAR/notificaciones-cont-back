import Router from "express";
import { listNoti, getNoti, postNoti, putNoti, deleteNoti } from "../controlers/controller.notificaciones.js";

const routes = Router();

routes.get('/notis', listNoti);
routes.get('/noti', getNoti);
routes.post('/noti', postNoti);
routes.put('/noti', putNoti);
routes.delete('/noti', deleteNoti)

export default routes;
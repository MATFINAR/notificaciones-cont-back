import Router from "express";
import routes from "./route.notificaciones.js";

const router = Router();

router.use('/api', routes)

export default router;
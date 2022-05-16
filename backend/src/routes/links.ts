import { Router } from "express";
import lilnksController from "../controllers/links"

const router = Router()

router.post('/links', lilnksController.postLinks);
router.get('/links/:code', lilnksController.hitLinks);
router.get('/links/:code/stats', lilnksController.getLinks);

export default router
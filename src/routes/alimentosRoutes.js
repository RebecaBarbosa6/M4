
import express from 'express';
const router = express.Router();
import { listarAlimentosProximosValidade, registrarDesperdicio, sugerirReceitas } from '../controllers/alimentosController.js';

router.get('/alimentos/validade-proxima', listarAlimentosProximosValidade);
router.get('/alimentos/desperdicio', registrarDesperdicio);
router.get('/receitas/sugestoes', sugerirReceitas);

export default router;

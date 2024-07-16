
const express = require('express');
const router = express.Router();
const alimentosController = require('../controllers/alimentosController');

router.get('/alimentos/validade-proxima', alimentosController.listarAlimentosProximosValidade);
router.get('/alimentos/desperdicio', alimentosController.registrarDesperdicio);
router.get('/receitas/sugestoes', alimentosController.sugerirReceitas);

module.exports = router;

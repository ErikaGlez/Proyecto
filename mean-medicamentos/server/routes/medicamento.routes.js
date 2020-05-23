const express = require('express');
const router = express.Router();

const medicamento = require('../controllers/medicamento.controller');

router.get('/', medicamento.getMedicamentos);
router.post('/',medicamento.createMedicamento);
router.get('/:id',medicamento.getMedicamento);
router.put('/:id', medicamento.editMedicamento);
router.delete('/:id', medicamento.deleteMedicamento);

module.exports = router;
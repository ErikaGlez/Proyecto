const Medicamento = require('../models/medicamento');

const medicamentoCtrl = {};

medicamentoCtrl.getMedicamentos = async (req, res) =>{
    const medicamentos= await Medicamento.find();
    res.json(medicamentos);
};

medicamentoCtrl.createMedicamento = async (req, res) => {
    const medicamento = new Medicamento({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        presentacion: req.body.presentacion,
        descripcion: req.body.descripcion,
        stock: req.body.stock
    });
    await medicamento.save();
    res.json({
        'status': 'Medicamento Guardado'
    });
};

medicamentoCtrl.getMedicamento = async (req, res) =>{
    const medicamento = await Medicamento.findById(req.params.id);
    res.json(medicamento);
};

medicamentoCtrl.editMedicamento = async (req, res) =>{
    const {id} = req.params;
    const medicamento = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        presentacion: req.body.presentacion,
        descripcion: req.body.descripcion,
        stock: req.body.stock
    };
    await Medicamento.findByIdAndUpdate(id, {$set: medicamento}, {new: true});
    res.json({status: 'Medicamento Actualizado'});
};

medicamentoCtrl.deleteMedicamento = async (req, res) =>{
    await Medicamento.findByIdAndRemove(req.params.id);
    res.json({status: 'Medicamento Eliminado'});
};

module.exports = medicamentoCtrl;
const mongoose = require('mongoose');
const {Schema} = mongoose;

const MedicamentoSchema = new Schema({
    codigo: {type: String, required: true},
    nombre: {type: String, required: true},
    presentacion: {type: String, required: true},
    descripcion: {type: String, required: true},
    stock: {type: Number, required: true},
});

module.exports = mongoose.model('Medicamento', MedicamentoSchema);
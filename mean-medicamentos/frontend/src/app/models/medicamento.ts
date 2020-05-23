export class Medicamento {

    constructor(_id='', codigo='', nombre='', presentacion='',descripcion='',stock=0){
        this._id=_id;
        this.codigo=codigo;
        this.nombre=nombre;
        this.presentacion=presentacion;
        this.descripcion=descripcion;
        this.stock=stock;

    }
    _id: string;
    codigo: string;
    nombre: string;
    presentacion: string;
    descripcion: string;
    stock: number;
}

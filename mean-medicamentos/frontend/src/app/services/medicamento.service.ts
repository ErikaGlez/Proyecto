import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  selectedMedicamento: Medicamento;
  Medicamentos: Medicamento[]; 
  readonly URL_API = 'http://localhost:3000/api/medicamentos'

  constructor(private http: HttpClient) { 
    this.selectedMedicamento = new Medicamento();

   }

  getMedicamentos(){
    return this.http.get(this.URL_API);
  }

  postMedicamento(Medicamento: Medicamento){
    return this.http.post(this.URL_API, Medicamento);
  }

  putMedicamento(Medicamento: Medicamento){
    return this.http.put(this.URL_API + `/${Medicamento._id}`, Medicamento);
  }

  deleteMedicamento(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

import { Component, OnInit } from '@angular/core';

import { MedicamentoService } from '../../services/medicamento.service';
import { NgForm } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento';  

declare var M: any;

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css'],
  providers: [MedicamentoService]
})
export class MedicamentosComponent implements OnInit {

  constructor(public medicamentoService: MedicamentoService) { }

  ngOnInit(): void {
    this.getMedicamentos();
  }

  addMedicamento(form: NgForm){
    if(form.value._id){
      this.medicamentoService.putMedicamento(form.value)
        .subscribe(res =>{
          this.resetForm(form);
          M.toast({html: 'Medicamento actualizado correctamente'});
          this.getMedicamentos();
        });
    } else{
      this.medicamentoService.postMedicamento(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Medicamento guardado correctamente'});
        this.getMedicamentos();
      });

    }
    
  }

  getMedicamentos(){
    this.medicamentoService.getMedicamentos()
      .subscribe(res =>{
        this.medicamentoService.Medicamentos = res as Medicamento[];
        console.log(res);
      });
  }

  editMedicamento(medicamento: Medicamento){
    this.medicamentoService.selectedMedicamento = medicamento;

  }
  
  deleteMedicamento(_id: string){
    if(confirm('¿Desea eliminar este medicamento?')){
      this.medicamentoService.deleteMedicamento(_id)
      .subscribe(res =>{
        this.getMedicamentos();
        M.toast({html: 'Medicamento Eliminado Correctamente'});
      });
    }
  }  

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.medicamentoService.selectedMedicamento = new Medicamento();
    }
  }

}

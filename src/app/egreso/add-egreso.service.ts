import { Injectable, OnInit } from '@angular/core';
import { DataServices } from '../data.service';
import { Egreso } from './egresos.module';

@Injectable({
  providedIn: 'root'
})
export class AddEgresoService implements OnInit {

  egresoss: Egreso[] = [];

  constructor(private dataServices: DataServices) {
   }
  ngOnInit(): void {
  }

  agregarEgreso(egreso: Egreso){
    this.egresoss.push(egreso);
    this.dataServices.guardarEngresos(this.egresoss);
  }

  eliminarEgreso(index: number){
    this.egresoss.splice(index,1);
    this.dataServices.deleteEgreso(index);
    this.dataServices.guardarEngresos(this.egresoss);    
  }

  updateEgreso(egreso: Egreso[]){
    this.egresoss = egreso;
  }

}

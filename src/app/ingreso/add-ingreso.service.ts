import { Injectable } from '@angular/core';
import { DataServices } from '../data.service';
import { Ingreso } from './ingresos.module';

@Injectable({
  providedIn: 'root'
})
export class AddIngresoService {

  ingresos: Ingreso[] = [];
  constructor(private dataManagerService: DataServices) { }

  agregarIngreso(ingreso: Ingreso){
    this.ingresos.push(ingreso);
    this.dataManagerService.guardarIngreso(this.ingresos);
  }

  eliminarIngreso(index: number){
    this.ingresos.splice(index,1);
    this.dataManagerService.deleteIngreso(index);
    this.dataManagerService.guardarIngreso(this.ingresos);
  }
  updateIngresoFromDB(ingresos: Ingreso[]){
    this.ingresos = ingresos;
  }
}

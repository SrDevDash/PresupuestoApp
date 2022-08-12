import { Injectable } from '@angular/core';
import { Ingreso } from './ingresos.module';

@Injectable({
  providedIn: 'root'
})
export class AddIngresoService {

  ingresos: Ingreso[] = [];
  constructor() { }

  agregarIngreso(ingreso: Ingreso){
    this.ingresos.push(ingreso);
  }

  eliminarIngreso(ingreso: Ingreso){
    let i = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(i,1);
  }
}

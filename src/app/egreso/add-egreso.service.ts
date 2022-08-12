import { Injectable } from '@angular/core';
import { Egreso } from './egresos.module';

@Injectable({
  providedIn: 'root'
})
export class AddEgresoService {

  egresos: Egreso[] = [];
  constructor() { }

  agregarEgreso(egreso: Egreso){
    this.egresos.push(egreso);
  }

  eliminarEgreso(egreso: Egreso){
    let i = this.egresos.indexOf(egreso);
    this.egresos.splice(i,1);
  }
}

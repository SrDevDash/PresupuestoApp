import { Injectable,EventEmitter } from '@angular/core';


@Injectable()
export class UpdatePresupuestoService {

  presupuesto = 0;
  ingresosTotales = 0;
  egresosTotales = 0;
  constructor() { }

  addIngreso(ingreso: number){
    this.presupuesto += ingreso
    this.ingresosTotales += ingreso;
  }
}

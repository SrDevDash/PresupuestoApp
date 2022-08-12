import { Component, Input, OnInit } from '@angular/core';
import { AddIngresoService } from '../ingreso/add-ingreso.service';
import { Ingreso } from '../ingreso/ingresos.module';
import { AddEgresoService } from './add-egreso.service';
import { Egreso } from './egresos.module';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[] = [];
  ingresos:Ingreso[] = [];
  constructor(private egresoService: AddEgresoService, private ingresoService: AddIngresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarEgreso(egreso: Egreso){
    this.egresoService.eliminarEgreso(egreso);
  }

  getPorcentaje(egreso: Egreso){
    let totalEgreso = 0;
    this.egresos.forEach(element => {
      totalEgreso += element.valor;
    });
    let porcentaje = this.egresos[this.getIndex(egreso)].valor / totalEgreso;
    return porcentaje;
  }
  getIndex(egreso: Egreso){
    return this.egresos.indexOf(egreso);
  }
}

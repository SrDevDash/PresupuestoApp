import { Component, Input, OnInit } from '@angular/core';
import { AddEgresoService } from './egreso/add-egreso.service';
import { AddIngresoService } from './ingreso/add-ingreso.service';
import { Egreso } from './egreso/egresos.module';
import { Ingreso } from './ingreso/ingresos.module';
import { UpdatePresupuestoService } from './update-presupuesto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'presupuesto-app';
  egresos: Egreso[] = [];
  ingresos: Ingreso[] = [];
  presupuesto: number = 0;
  ingresosTotales: number = 0;
  egresosTotales: number = 0;


  constructor(private egresoService: AddEgresoService, private ingresoService: AddIngresoService, private updatePresuService: UpdatePresupuestoService){}
  ngOnInit(): void {
    this.presupuesto = this.updatePresuService.presupuesto;
    this.ingresosTotales = this.updatePresuService.ingresosTotales;
    this.egresosTotales = this.updatePresuService.egresosTotales;
    this.egresos = this.egresoService.egresos;
    this.ingresos = this.ingresoService.ingresos;
  }

  getIngresoTotal()
  {
    let ingresoTotal:number=0;
    this.ingresos.forEach(element => {
      ingresoTotal += element.valor
    });
    return ingresoTotal;
  }
  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(element => {
      egresoTotal += element.valor;
    });
    return egresoTotal;
  }
  getPresupuesto(){
    let presupuesto:number =0;
    presupuesto =  this.getIngresoTotal() - this.getEgresoTotal();
    return presupuesto;
  }
  getEgresoPorcentaje(){
    let egresoPorcentaje:number = 0;
    if(this.getEgresoTotal() != 0){      
      egresoPorcentaje =  this.getEgresoTotal() /this.getIngresoTotal();     
    }
    if(this.getIngresoTotal() == 0){
      egresoPorcentaje = 1;
    }    
    return egresoPorcentaje;
  }
}

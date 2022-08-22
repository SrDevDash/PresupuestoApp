import { Component, Input, OnInit } from '@angular/core';
import { AddEgresoService } from './egreso/add-egreso.service';
import { AddIngresoService } from './ingreso/add-ingreso.service';
import { Egreso } from './egreso/egresos.module';
import { Ingreso } from './ingreso/ingresos.module';
import { DataServices } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];
  title = 'presupuesto-app';
  ingresoTotales: number = 0; 
  presupuesto: number = 0;
  ingresosTotales: number = 0;
  egresosTotales: number = 0;


  constructor(private egresoService: AddEgresoService, private ingresoService: AddIngresoService, private dataService: DataServices){}
  ngOnInit(): void {
    }

  getIngresoTotal()
  {
    let ingresoTotal:number=0;
    if(this.ingresoService.ingresos != null){
      this.ingresoService.ingresos.forEach(element => {
        ingresoTotal += element.valor
      }
      )
    }
    
    return ingresoTotal;
  }
    getEgresoTotal(){
    let egresoTotal:number=0;
    if(this.egresoService.egresoss != null){
      this.egresoService.egresoss.forEach(element => {
        egresoTotal += element.valor
      }
      )
    }

    return egresoTotal;
  }
   getPresupuesto(){
    let presupuesto:number =0;
    presupuesto =  this.getIngresoTotal() - this.getEgresoTotal();
    return presupuesto;
  }

   getEgresoPorcentaje(){
    let egresoPorcentaje:number = 0;
    if( this.getEgresoTotal() != 0){      
      egresoPorcentaje =   this.getEgresoTotal() /this.getIngresoTotal();     
    }
    if(this.getIngresoTotal() == 0){
      egresoPorcentaje = 1;
    }    
    return egresoPorcentaje;
  }

}

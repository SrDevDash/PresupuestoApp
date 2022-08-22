import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.service';
import { AddIngresoService } from '../ingreso/add-ingreso.service';
import { AddEgresoService } from './add-egreso.service';
import { Egreso } from './egresos.module';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[] = [];

  constructor(private egresoService: AddEgresoService, private ingresoService: AddIngresoService,private dataService: DataServices) { }

  ngOnInit(): void {
    this.dataService.getEgresos().subscribe(
      (egresos: Egreso[]) =>  {
      if(egresos != null){
        this.egresos = egresos;
        this.egresoService.updateEgreso(egresos);
      }
      else{
        this.egresoService.updateEgreso(this.egresos);
      }
       
      }
    );
  }

  eliminarEgreso(index: number){
    this.egresoService.eliminarEgreso(index);
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

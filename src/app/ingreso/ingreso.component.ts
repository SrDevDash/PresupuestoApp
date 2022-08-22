import { Component, Input, OnInit } from '@angular/core';
import { DataServices } from '../data.service';
import { AddIngresoService } from './add-ingreso.service';
import { Ingreso } from './ingresos.module';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


  ingresos:Ingreso[] = [];
  constructor(private ingresoService: AddIngresoService,private dataService: DataServices) {
   }

  ngOnInit(): void {
    this.dataService.getIngreso().subscribe(
      (ingresos: Ingreso[]) => {
        if(ingresos != null){
          this.ingresos = ingresos;
          this.ingresoService.updateIngresoFromDB(this.ingresos);
        }
        else{
          this.ingresoService.updateIngresoFromDB(this.ingresos);
        }
        
      }
    )
  }

  eliminarIngreso(index: number){
    this.ingresoService.eliminarIngreso(index);
  };
}

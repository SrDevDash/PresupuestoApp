import { Component, Input, OnInit } from '@angular/core';
import { AddIngresoService } from './add-ingreso.service';
import { Ingreso } from './ingresos.module';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


  ingresos:Ingreso[] = [];
  constructor(private ingresoService: AddIngresoService) {
   }

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso){
    this.ingresoService.eliminarIngreso(ingreso);
  };
}

import { Component, OnInit } from '@angular/core';
import { AddEgresoService } from '../egreso/add-egreso.service';
import { AddIngresoService } from '../ingreso/add-ingreso.service';
import { Egreso } from '../egreso/egresos.module';
import { Ingreso } from '../ingreso/ingresos.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  descripcion = '';
  valor = 0;
  tipo: string= 'plus';
  constructor(private addEgresoService: AddEgresoService, private addIngresoService: AddIngresoService,
    ) {}

  ngOnInit(): void {
  }
  agregarProducto(){
    if(this.tipo == 'plus')
    {
      let tempIngreso = new Ingreso();
      tempIngreso.description = this.descripcion;
      tempIngreso.valor = this.valor;
      this.addIngresoService.agregarIngreso(tempIngreso);
    }if(this.tipo == 'mini')
    {
      let tempEgreso = new Egreso();
      tempEgreso.description = this.descripcion;
      tempEgreso.valor = this.valor;
      this.addEgresoService.agregarEgreso(tempEgreso);
    }
  }
}

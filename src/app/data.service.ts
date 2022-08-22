import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Ingreso } from "./ingreso/ingresos.module";
import { Egreso } from "./egreso/egresos.module";

@Injectable()

export class DataServices {
    constructor(private httpsClient: HttpClient){

    }

    //Guardar Ingreso
    guardarIngreso(ingresos: Ingreso[]){
        this.httpsClient.put('https://presupuestobdapp-default-rtdb.firebaseio.com/ingresos.json',ingresos).
        subscribe(
            Response => {
                console.log('Resultado de guardar ingresos: ' + Response);
            },
            error => {
                console.log('Error al guardar ingresos: ' + error);
            }
        );
    }

    guardarEngresos(egresos: Egreso[]){
        this.httpsClient.put('https://presupuestobdapp-default-rtdb.firebaseio.com/Egresos.json',egresos).
        subscribe(
            Response => {
                console.log('Resultado de guardar engresos: ' + Response);
            },
            error => {
                console.log('Error al guardar engresos: ' + error);
            }
        );
    }

    getEgresos(){
        return this.httpsClient.get('https://presupuestobdapp-default-rtdb.firebaseio.com/Egresos.json');         
    }

    getIngreso(){
        return this.httpsClient.get('https://presupuestobdapp-default-rtdb.firebaseio.com/ingresos.json');         
    }

    deleteEgreso(id: number){
        this.httpsClient.delete('https://presupuestobdapp-default-rtdb.firebaseio.com/Egresos/' + id + '.json').subscribe
        (
            Response => console.log('Resultado de eliminar persona: ' + Response),
            Error => console.log('Error al eliminar Egreso ' + Error)
        );
       // alert('eliminado');
    }
    deleteIngreso(id: number){
        this.httpsClient.delete('https://presupuestobdapp-default-rtdb.firebaseio.com/ingresos/' + id+ '.json');
    }
}
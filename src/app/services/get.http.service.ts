import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GetService{
    private apiUrl:string ='https://calm-headland-25498.herokuapp.com/ejercicios';
    private gifes:any[] = [];
    
    constructor(private http:Http){

    }
    private headers = new Headers();
    
    getData2(apiUrl2){
        return this.http.get(apiUrl2,{headers:this.headers})
    }
    
    getEntrenador(){
      let apiUrl:string='mysterious-falls-25655.herokuapp.com/entrenadors';
      return this.http.get(apiUrl,{headers:this.headers})
    }
    getUsuario(){

    }
    getRutina(){

    } 
    getEjercicios(){

    }   
}
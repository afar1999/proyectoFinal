import { Injectable } from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ProfileService{
    constructor(private http:Http){

    }
    private headers = new Headers({
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers' : 'Content-Type'
      })
    data:any ={"nombre":"sentadilla","musculo":"pierna","maquina":"mancuernas","repeticiones":"12","series":"2","peso":"45kg","dia":"lunes"};
    data2:any={"tipo":"hipertrofia"}
    saveProfile(url,data3){
        return this.http.post(url,data3,{headers:this.headers}).map(res => res.json());
    }
    
}
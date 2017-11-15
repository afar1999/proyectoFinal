import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {GetService} from '../services/get.http.service';
import {ProfileService} from '../services/profile.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css'],
  providers:[ProfileService,GetService]
})
export class SegundaComponent implements OnInit {

  constructor(private GetService:GetService) { 
    
   this.openmodal();
   this.getInfo();
   console.log(this.usuario);
   console.log(this.entrenador);
   //get de la rutina del usuario que escogio
  }
  usuario:string;
  entrenador:string;
  gifes= new Array;
  temporal = new Array;
  openmodal(){
    
    var Person = prompt("Porfavor ingrese en id del usuario:", "3546");
    var Entrenador = prompt("Porfavor ingrese en id del entrenador:", "3546");
    this.usuario=Person;
    this.entrenador=Entrenador;
  }
  ngOnInit() {
    
  }
  public vaciar(){
    this.droppedItemsLunes=[];
    this.droppedItemsMartes=[];
    this.droppedItemsMiercoles=[];
    this.droppedItemsJueves=[];
    this.droppedItemsViernes=[];
    this.droppedItemsSabado=[];
    this.droppedItemsDomingo=[];
  }
  public ordenar(){
    var n=0;
    while(n<this.temporal.length){
      if(this.temporal[n].dia=='lunes'){
        this.droppedItemsLunes.push(this.temporal[n]);
      }
      else if(this.temporal[n].dia=='martes'){
        this.droppedItemsMartes.push(this.temporal[n]);
      }
      else if(this.temporal[n].dia=='miercoles'){
        this.droppedItemsMiercoles.push(this.temporal[n]);
      }
      else if(this.temporal[n].dia=='jueves'){
        this.droppedItemsJueves.push(this.temporal[n]);
      }
      else if(this.temporal[n].dia=='sabado'){
        this.droppedItemsSabado.push(this.temporal[n]);
      }
      else if(this.temporal[n].dia=='domingo'){
        this.droppedItemsDomingo.push(this.temporal[n]);
      }
      else if(this.temporal[n].dia=='viernes'){
        this.droppedItemsViernes.push(this.temporal[n]);
      }
      console.log(this.temporal[n].dia);
      n++;
    }
  }
  public getInfo(){
    var url='https://immense-mountain-21747.herokuapp.com/entrenadors/'+this.entrenador+'/usuarios/'+this.usuario+'/rutinas';
    
    this.GetService.getData2(url).subscribe(data=>{   
      this.gifes= data.json();
      console.log(this.gifes);  
    })
    
  }
  mostrar(item){
    console.log(item);
    var url='https://immense-mountain-21747.herokuapp.com/entrenadors/'+this.entrenador+'/usuarios/'+this.usuario+'/rutinas/'+item+'/ejercicios';
    console.log(url);
    this.GetService.getData2(url).subscribe(data=>{   
      this.temporal= data.json();
      this.vaciar();
      this.ordenar();

    })
  }
  droppedItemsLunes = [
    
  ];
  droppedItemsMartes = [
    
  ];
  droppedItemsMiercoles = [
    
  ];
  droppedItemsJueves = [
    
  ];
  droppedItemsViernes = [
    
  ];
  droppedItemsSabado = [
    
  ];
  droppedItemsDomingo = [
    
  ];


}


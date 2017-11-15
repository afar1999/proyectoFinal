import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import {Http, Response} from '@angular/http';
import {GetService} from '../services/get.http.service';
import {ProfileService} from '../services/profile.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css'],
  providers:[ProfileService,GetService]
  
})
export class AcercaComponent implements OnInit {
  private apiUrl:string ='https://calm-headland-25498.herokuapp.com/ejercicios';
  private gifes=new Array;
  private gifes2=new Array;
  private gifesPrueba:any=[
    {nombre:'flexiones',musculo:'bicep',maquina:'cuerpo',repeticiones:'10',series:'3',peso:'corporal',dia:'lunes',gif:'http://olegif.com/bin/gifs/00/74/84.gif'},
    {nombre:'apertura',musculo:'pecho',maquina:'30',repeticiones:'10',series:'3',peso:'50',dia:'lunes',gif:'http://4.bp.blogspot.com/-TyYSJyJy-8o/UZ_GKomdwrI/AAAAAAAAASI/LfKLv0kJ5ns/s1600/Pectorales4.gif'},
    {nombre:'pantorrilla',musculo:'pantorrila',maquina:'15',repeticiones:'10',series:'3',peso:'corporal',dia:'lunes',gif:'http://1.bp.blogspot.com/-K45mC3eSi0Y/VDxaPa47z9I/AAAAAAAAFpg/q3sZgey0Now/s1600/Pantorrilla%2Bsentado%2Bcosturera.gif'}]
  private ejemplo:any={nombre:'',musculo:''}

  
  constructor(private GetService:GetService, private ProfileService:ProfileService){
    this.openmodal2();
    this.getInfo();
    this.getInfo2();
    
    this.ultimoIdRutina();
    
  } 
  public getInfo2(){
    var url='https://immense-mountain-21747.herokuapp.com/entrenadors/'+this.entrenador+'/usuarios/'+this.usuario+'/rutinas';
    
    this.GetService.getData2(url).subscribe(data=>{   
      this.gifes= data.json();
      console.log(this.gifes);  
    })
    
  }
  usuario:string;
  entrenador:string;
  temporal = new Array;
  idRutina;
  openmodal2(){
    
    var Person = prompt("Porfavor ingrese en id del usuario:", "3546");
    var Entrenador = prompt("Porfavor ingrese en id del entrenador:", "3546");
    this.usuario=Person;
    this.entrenador=Entrenador;
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
  public vaciar(){
    this.droppedItemsLunes=[];
    this.droppedItemsMartes=[];
    this.droppedItemsMiercoles=[];
    this.droppedItemsJueves=[];
    this.droppedItemsViernes=[];
    this.droppedItemsSabado=[];
    this.droppedItemsDomingo=[];
  }
  public rutina(){
    var tipo = prompt("Porfavor ingrese el tipo de rutina:", "musculacion");
    console.log(tipo);
    var data:any={"tipo":tipo}
    this.ProfileService.saveProfile('https://immense-mountain-21747.herokuapp.com/entrenadors/'+this.entrenador+'/usuarios/'+this.usuario+'/rutinas',data).subscribe(res => this.ejemplo = res);
    this.despues();
  }
  public despues(){
    console.log(this.idRutina);
    this.idRutina=this.idRutina+1;
    let url='https://immense-mountain-21747.herokuapp.com/entrenadors/'+this.entrenador+'/usuarios/'+this.usuario+'/rutinas/'+this.idRutina+'/ejercicios';
    this.postEjercicios(url);   
  }
  public postEjercicios(url){
    for(var n=0;n<this.droppedItemsLunes.length;n++){
      this.droppedItemsLunes[n].dia="lunes";
      this.ProfileService.saveProfile(url,this.droppedItemsLunes[n]).subscribe(res => this.ejemplo = res);      
    }
    for(var n=0;n<this.droppedItemsMartes.length;n++){
      this.droppedItemsMartes[n].dia="martes";
      this.ProfileService.saveProfile(url,this.droppedItemsMartes[n]).subscribe(res => this.ejemplo = res);            
    }
    for(var n=0;n<this.droppedItemsMiercoles.length;n++){
      this.droppedItemsMiercoles[n].dia="miercoles";
      this.ProfileService.saveProfile(url,this.droppedItemsMiercoles[n]).subscribe(res => this.ejemplo = res);            
    }
    for(var n=0;n<this.droppedItemsJueves.length;n++){
      this.droppedItemsJueves[n].dia="jueves";
      this.ProfileService.saveProfile(url,this.droppedItemsJueves[n]).subscribe(res => this.ejemplo = res);            
    }
    for(var n=0;n<this.droppedItemsViernes.length;n++){
      this.droppedItemsViernes[n].dia="viernes";
      this.ProfileService.saveProfile(url,this.droppedItemsViernes[n]).subscribe(res => this.ejemplo = res);            
    }
    for(var n=0;n<this.droppedItemsSabado.length;n++){
      this.droppedItemsSabado[n].dia="sabado";
      this.ProfileService.saveProfile(url,this.droppedItemsSabado[n]).subscribe(res => this.ejemplo = res);            
    }
    for(var n=0;n<this.droppedItemsDomingo.length;n++){
      this.droppedItemsDomingo[n].dia="domingo";
      this.ProfileService.saveProfile(url,this.droppedItemsDomingo[n]).subscribe(res => this.ejemplo = res);            
    }
  }
  public ultimoIdRutina(){
    let url='https://immense-mountain-21747.herokuapp.com/entrenadors/'+this.entrenador+'/usuarios/'+this.usuario+'/rutinas/';
    this.GetService.getData2(url).subscribe(data=>{   
      this.temporal= data.json();
      console.log(this.temporal[this.temporal.length-1].id);
      this.guardarVariable(this.temporal[this.temporal.length-1].id);
    })
  }
  guardarVariable(numero){
    this.idRutina=numero;
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
    this.GetService.getData2('https://pacific-headland-94110.herokuapp.com/ejercicios').subscribe(data=>{   
      this.gifes2= data.json();
      console.log(this.gifes2);  
    })
    
  }

    
  droppedItemsLunes=new Array;
  droppedItemsMartes=new Array;
  droppedItemsMiercoles=new Array;
  droppedItemsJueves=new Array;
  droppedItemsViernes=new Array;
  droppedItemsSabado =new Array;
  droppedItemsDomingo = new Array;
  onAnyDropLunes(e: any) {
    this.droppedItemsLunes.push(e.dragData);
    console.log(e.dragData);
  }
  onAnyDropMartes(e: any) {
    this.droppedItemsMartes.push(e.dragData);
  }
  onAnyDropMiercoles(e: any) {
    this.droppedItemsMiercoles.push(e.dragData);
  }
  onAnyDropJueves(e: any) {
    this.droppedItemsJueves.push(e.dragData);
  }
  onAnyDropViernes(e: any) {
    this.droppedItemsViernes.push(e.dragData);
  }
  onAnyDropSabado(e: any) {
    this.droppedItemsSabado.push(e.dragData);
  }
  onAnyDropDomingo(e: any) {
    this.droppedItemsDomingo.push(e.dragData);
  }
  onDeleteDropL(e: any) {
    this.removeItem(e.dragData, this.droppedItemsLunes);
  }
  onDeleteDropM(e: any) {
    this.removeItem(e.dragData, this.droppedItemsMartes);
  }
  onDeleteDropMi(e: any) {
    this.removeItem(e.dragData, this.droppedItemsMiercoles);
  }
  onDeleteDropJ(e: any) {
    this.removeItem(e.dragData, this.droppedItemsJueves);
  }
  onDeleteDropV(e: any) {
    this.removeItem(e.dragData, this.droppedItemsViernes);
  }
  onDeleteDropS(e: any) {
    this.removeItem(e.dragData, this.droppedItemsSabado);
  }
  onDeleteDropD(e: any) {
    this.removeItem(e.dragData, this.droppedItemsDomingo);
  }

  removeItem(item: any,  list: Array<any>) {
    let index = list.map(function (e) {
      return e.id
    }).indexOf(item.id);
    list.splice(index, 1);
    
  }

  ngOnInit() {
  }
  public open(event, item) {
    item.musculo = document.getElementById("firstname");
    
    alert('Open ' + item.musculo);
    
  }
  openmodal(event,item,list){
    list.indexOf(item);

    list[list.indexOf(item)].peso=prompt("Porfavor ingrese el nombre:", "3546");
    list[list.indexOf(item)].repeticiones=prompt("Porfavor ingrese el numero de repeticiones:", "3546");
    list[list.indexOf(item)].series=prompt("Porfavor ingrese el numero de series:", "3546");
    
  }

  

}


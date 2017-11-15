import {Injectable} from '@angular/core';

@Injectable()
    export class ImageService{
        visibleImages=[];
        getImages(){
            return this.visibleImages =IMAGES.slice(0);
        }
        getImage(name:string){
            return IMAGES.slice(0).find(image =>image.name==name);
        }   
    }
    const IMAGES = [
        {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
        {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
        {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
    ]

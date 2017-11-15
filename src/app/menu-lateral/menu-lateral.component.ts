import { Component, OnInit, OnChanges } from '@angular/core';
import {ImageService} from '../image/shared/image.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  visibleImages:any[]=[];

  constructor(private imageService: ImageService) { 
    this.visibleImages= this.imageService.getImages();
  }

  ngOnInit() {
  }

}

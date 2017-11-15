import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { SidebarModule } from 'ng2-sidebar-css3';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SegundaComponent } from './segunda/segunda.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'segunda', component: SegundaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    SegundaComponent,
    InicioComponent,
    AcercaComponent,
    MenuLateralComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule.forRoot(),
    SidebarModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'segunda',
        component: SegundaComponent
      },
      { path: 'inicio', component: InicioComponent },
      { path: 'acerca', component: AcercaComponent },
      { path: 'login', component: LoginComponent },
    
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

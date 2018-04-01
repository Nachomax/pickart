import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { PerfilComponent } from './perfil/perfil.component';
import {AppRoutingModule} from './app.route';
import { VisorimgComponent } from './visorimg/visorimg.component'

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, MenuComponent, ContenidoComponent, PerfilComponent, VisorimgComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

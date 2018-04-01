import { PerfilComponent } from './perfil/perfil.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { VisorimgComponent } from './visorimg/visorimg.component';

const routes: Routes = [
  { path: '', component: ContenidoComponent},
  { path: 'perfil', component: PerfilComponent },
  { path: 'imagen', component: VisorimgComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
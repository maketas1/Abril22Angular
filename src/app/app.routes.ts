import { Routes } from '@angular/router';
import { Ejercicio1InmueblesDisponiblesComponent } from './ejercicio1-inmuebles-disponibles/ejercicio1-inmuebles-disponibles.component';
import { Ejercicio1InmueblesFuturoComponent } from './ejercicio1-inmuebles-futuro/ejercicio1-inmuebles-futuro.component';
import { Ejercicio2BlogComponent } from './ejercicio2-blog/ejercicio2-blog.component';
import { Ejercicio2ArticuloComponent } from './ejercicio2-articulo/ejercicio2-articulo.component';

export const routes: Routes = [
    {path:'ejercicio1-inmuebles-futuro', title:'Inmuebles Futuro', component:Ejercicio1InmueblesFuturoComponent},
    {path:'ejercicio1-inmuebles-disponibles/:id', title:'Inmuebles disponibles', component:Ejercicio1InmueblesDisponiblesComponent},
    {path:'ejercicio2-blog', title:'Blog', component:Ejercicio2BlogComponent},
    {path:'ejercicio2-articulo/:id', title:'Articulo', component:Ejercicio2ArticuloComponent}
];

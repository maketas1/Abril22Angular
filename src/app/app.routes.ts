import { Routes } from '@angular/router';
import { Ejercicio1InmueblesDisponiblesComponent } from './ejercicio1-inmuebles-disponibles/ejercicio1-inmuebles-disponibles.component';
import { Ejercicio1InmueblesFuturoComponent } from './ejercicio1-inmuebles-futuro/ejercicio1-inmuebles-futuro.component';

export const routes: Routes = [
    {path:'ejercicio1-inmuebles-futuro', title:'Inmuebles Futuro', component:Ejercicio1InmueblesFuturoComponent},
    {path:'ejercicio1-inmuebles-disponibles/:id', title:'Inmuebles disponibles', component:Ejercicio1InmueblesDisponiblesComponent},
    {path:'', redirectTo:'/ejercicio1-inmuebles-futuro', pathMatch:'full'}
];

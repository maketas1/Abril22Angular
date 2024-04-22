import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1InmueblesFuturoComponent } from './ejercicio1-inmuebles-futuro/ejercicio1-inmuebles-futuro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio1InmueblesFuturoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril22Angular';
}

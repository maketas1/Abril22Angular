import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio1-inmuebles-disponibles',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1-inmuebles-disponibles.component.html',
  styleUrl: './ejercicio1-inmuebles-disponibles.component.css'
})
export class Ejercicio1InmueblesDisponiblesComponent {
  @Input()
  id = 0;

  inmuebles = [
    {id: '1', descripcion: '¡Disponibilidad inmediata! Fantastica villa ubicada en Alta Vista una de las mejores y más demanda urbanización de San Pedro de Alcántara. Con toda la tranquilidad de estar en la zona residencial pegando con el centro de San Pedro de Alcántara y al lado de los campos de Golf de Guadalmina y cercano de la playa. Esta cómoda, amplia y luminosa villa unifamiliar se distribuye de la siguiente forma Planta baja: recibidor, amplio salón y comedor independiente con acceso directo a las terrazas y al jardín. Un dormitorio con armarios empotrados, chimenea y otro dormitorio independiente junto al baño. Desde el vestíbulo podemos entrar a la cocina totalmente equipada y al salón comedor. Primera planta: cuatro dormitorios, dos con terraza y otros dos balcón. Dos baños completos (uno de ellos en suite principal) y armarios empotrados en todas las habitaciones. Dispone también de una gran sala de estar con amplios armarios empotrados. Exterior: jardín, piscina, barbacoa, zona de aparcamiento para varios vehículos y garaje Comercializa Aliseda Excent'},
    {id: '2', descripcion: 'ACOGEDOR CHALET INDEPENDIENTE de dos plantas, en urbanización Valencia la Vella a 5m de la parada del metro, en la ciudad de Riba roja de Turia. En perfecto estado para entrar a vivir con 189 m² construidos de vivienda más un semisótano de 82 m² en una parcela de 636 m². La urb. Valencia la Vella está en auge y no paran de construir por la zona, aparte tiene metro a 5 m. de la vivienda. Esta propiedad nos recibe con una bonita parcela donde poder hacer realidad el jardín que siempre has soñado que te acompaña a la entrada de la vivienda. La vivienda nos recibe con un bonito hall de entrada que da paso al salón comedor con distintas orientaciones para poder disfrutar de una agradable estancia en cualquier época del año, además cuenta con un ventanal del cual puedes acceder a la zona de jardín y piscina, continuando por la vivienda tenemos una cocina tipo office con vistas al jardín y una salida independiente al jardín, a continuación tenemos 1 habitacion doble y un cuarto de baño completo. En primera planta tenemos 2 habitaciones dobles (1 con vistas a la montaña y 1 con salida a un amplia terraza privada) en esta planta tenemos también un cuarto de baño completo. El semisótano diáfano tiene posibilidad de abrir fácilmente una puerta grande para entrar los vehículos tiene capacidad para dos coches y además cuenta con una habitación multiusos. Las ventanas son de aluminio color blanco con doble cristal Climalit y las puertas de roble. Hay sistema de calefacción con radiadores de gas propano en toda la vivienda y sistema de aire acondicionado frio/calor mediante splits en la habitación. El suelo es gres y las paredes lisas. Tiene rejas de seguridad, mosquiteras. Tenemos armarios empotrados y conexión de televisión en todas las habitaciones. En el exterior, tenemos una acogedora piscina con escalera romana, luz y sistema de filtración, junto con una cómoda parcela donde poder hacer realidad el jardín que siempre has soñado. Situación inmejorable, a tan solo 5 Km del centro de salud, a 4 Km del supermercado, 5 Km del colegio, 500 m del transporte público y a tan solo 4 Km de las principales vías como A-7. Comercializa Aliseda Excent'}
  ];
}

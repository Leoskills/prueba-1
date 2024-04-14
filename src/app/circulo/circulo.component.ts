import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonImg, IonInput, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../geometricas/figuras';


@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [IonList,FormsModule, IonItem, IonImg, IonInput, IonButton]
})
export class CirculoComponent  implements OnInit {

  resultado: string="";
  radio1str: string="";

  constructor() { }

  ngOnInit() {}

  CalcularPerimetro() {
    const radio1 = parseInt(this.radio1str)
    const figuras = new Circulo(radio1)
    const liquido = figuras.CalcularPerimetro()
    this.resultado = `el perimetro es  ${liquido}`
    }

}
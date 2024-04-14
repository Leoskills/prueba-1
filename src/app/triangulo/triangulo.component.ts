import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonImg, IonInput, IonButton}  from '@ionic/angular/standalone';
import { Triangulo } from '../geometricas/figuras2';
@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonList, IonItem,FormsModule, IonImg, IonInput, IonButton]
})
export class TrianguloComponent  implements OnInit {

ladoAstr: string="";
ladoBstr: string="";
LadoCstr: string="";
resultado: string="";

  constructor() { }

  ngOnInit() {}

  CalcularPerimetroTriangulo() {
    const ladoA = parseInt(this.ladoAstr)
    const ladoB = parseInt(this.ladoBstr)
    const ladoC = parseInt(this.LadoCstr)
    const figuras2 = new Triangulo(ladoA,ladoB,ladoC)
    const result = figuras2.CalcularPerimetroTriangulo()
    this.resultado = `el perimetro es  ${result}`
    
    }

}

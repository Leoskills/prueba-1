import { Component } from '@angular/core';
import { IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,CirculoComponent,CommonModule, TrianguloComponent, IonSelect, IonSelectOption, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  tipoDeFigura:string = "";
  constructor() {}

  esCirculo(){return this.tipoDeFigura == "circulo"}
  esTriangulo(){return this.tipoDeFigura == "triangulo"}

  ManejarSeleccionGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoDeFigura=$event.detail.value
    
    }
}

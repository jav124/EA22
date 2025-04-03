import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Haptics } from '@capacitor/haptics';

async function tomarFoto() {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    quality: 90
  });
  console.log(photo);
}

async function obtenerUbicacion() {
  const coordinates = await Geolocation.getCurrentPosition();
  console.log('Ubicación:', coordinates);
}

async function vibrar() {
  await Haptics.vibrate();
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}

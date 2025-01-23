import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Mannol';
  nombre = 'Yandriel Padrón';
  edad = 34;
  email = 'yandriel900724@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio = 'http://www.google.com';

  esActivo() {
    return this.activo ? 'Trabajador Activo' : 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    return this.sueldos.reduce((suma, sueldo) => suma + sueldo, 0);
  }
}

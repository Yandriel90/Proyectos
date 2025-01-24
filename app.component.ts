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
  name = 'Yandriel Padrón';
  age = 34;
  email = 'yandriel900724@gmail.com';
  salaries = [1700, 1600, 1900];
  active = true;
  site = 'http://www.google.com';

  isActive() {
    return this.active ? 'Active worker' : 'Inactive worker';
  }

  3lastSalaries() {
    return this.salaries.reduce((add, salaries) => add + salaries, 0);
  }
}

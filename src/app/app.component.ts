import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabellaComponent } from './tabella/tabella.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabellaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularNew';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GmuendeHeaderComponent } from '../framework/gmuende-header/gmuende-header.component';
import { GmuendeFooterComponent } from '../framework/gmuende-footer/gmuende-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GmuendeHeaderComponent, GmuendeFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'biohof-rinisgmuende';
}

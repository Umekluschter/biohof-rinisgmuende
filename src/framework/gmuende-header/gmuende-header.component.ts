import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'gmuende-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gmuende-header.component.html',
  styleUrl: './gmuende-header.component.scss'
})
export class GmuendeHeaderComponent { }

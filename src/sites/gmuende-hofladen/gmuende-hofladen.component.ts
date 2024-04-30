import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-gmuende-hofladen',
  standalone: true,
  imports: [],
  templateUrl: './gmuende-hofladen.component.html',
  styleUrl: './gmuende-hofladen.component.scss'
})
export class GmuendeHofladenComponent {
  public scrollOffset = '0px';

  constructor() {
    fromEvent(window, 'scroll', { capture: true })
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.scrollOffset = `-${document.documentElement.scrollTop / 3}px`);
  }
}

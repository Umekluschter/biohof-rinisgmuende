import { Component, ElementRef, viewChild } from '@angular/core';
import { GmuendeCarouselComponent } from '../../framework/gmuende-carousel/gmuende-carousel.component';
import { distinctUntilChanged, fromEvent, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'gmuende-home',
  standalone: true,
  imports: [GmuendeCarouselComponent],
  templateUrl: './gmuende-home.component.html',
  styleUrl: './gmuende-home.component.scss'
})
export class GmuendeHomeComponent {
  public scrollOffset = '0px';
  private readonly arrow = viewChild.required<ElementRef>('arrow');

  constructor() {
    const scrollEvent = fromEvent(window, 'scroll', { capture: true });

    scrollEvent.pipe(
      map(() => document.documentElement.scrollTop > 75),
      distinctUntilChanged(),
      takeUntilDestroyed(),
    ).subscribe((scrolled) => {
      if (scrolled) {
        this.arrow().nativeElement.classList.add('hide');
      } else {
        this.arrow().nativeElement.classList.remove('hide');
      }
    });

    scrollEvent
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.scrollOffset = `-${document.documentElement.scrollTop / 3}px`);
  }
}

import { Component, DestroyRef, ElementRef, OnInit, inject, viewChildren } from '@angular/core';
import { CarouselConfig } from '../../assets/configs/carousel-config.const';
import { Subject, interval, startWith, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'gmuende-carousel',
  standalone: true,
  imports: [],
  templateUrl: './gmuende-carousel.component.html',
  styleUrl: './gmuende-carousel.component.scss'
})
export class GmuendeCarouselComponent implements OnInit {
  public carouselConfigs: CarouselConfig[] = CarouselConfig;
  public activeIndex = 0;

  private readonly destroyRef = inject(DestroyRef);

  private readonly resetInterval$$ = new Subject<void>();

  public nextImage(delta: number): void {
    let newActiveIndex = this.activeIndex += delta;

    if (newActiveIndex > this.carouselConfigs.length - 1) {
      newActiveIndex = 0;
    } else if (newActiveIndex < 0) {
      newActiveIndex = this.carouselConfigs.length - 1;
    }
    this.activeIndex = newActiveIndex;
    let el = document.getElementById(this.activeIndex.toString());
    el?.scrollIntoView({ behavior: 'smooth' });
    this.resetInterval$$.next();
  }

  public ngOnInit(): void {
    this.resetInterval$$.pipe(
      startWith(void 0),
      switchMap(() => interval(5000)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.nextImage(1));
  }
}

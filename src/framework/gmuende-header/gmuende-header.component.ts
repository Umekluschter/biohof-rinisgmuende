import { Component, HostBinding } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { combineLatest, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'gmuende-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gmuende-header.component.html',
  styleUrl: './gmuende-header.component.scss'
})
export class GmuendeHeaderComponent {
  public collapsed = false;
  public highlighted = false;

  @HostBinding('class.collapsed') get _collapsed() {
    return this.collapsed;
  }

  @HostBinding('class.highlighted') get _highlighted() {
    return this.highlighted;
  }

  public constructor() {
    const scrollEvent = fromEvent(window, 'scroll', { capture: true }).pipe(
      map(() => document.documentElement.scrollTop > 50),
      distinctUntilChanged(),
      takeUntilDestroyed(),
    );

    const mouseEvent = fromEvent<MouseEvent>(window, 'mousemove').pipe(
      map((event) => event.clientY > 100),
      distinctUntilChanged(),
      takeUntilDestroyed(),
    );

    mouseEvent.pipe(takeUntilDestroyed()).subscribe((mouse) => this.highlighted = !mouse);

    combineLatest([scrollEvent, mouseEvent]).pipe(
      takeUntilDestroyed(),
    ).subscribe(([scroll, mouse]) => this.collapsed = scroll && mouse);
  }
}

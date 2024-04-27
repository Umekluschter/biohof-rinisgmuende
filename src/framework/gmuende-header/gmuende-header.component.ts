import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'gmuende-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gmuende-header.component.html',
  styleUrl: './gmuende-header.component.scss'
})
export class GmuendeHeaderComponent implements OnInit {
  public url!: string;

  private readonly router = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  // Show active URL in Navigation
  public ngOnInit(): void {
    this.router.url.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((url: UrlSegment[]) => {
      console.log(url);

      // this.url = url;
    }
    )
  }
}

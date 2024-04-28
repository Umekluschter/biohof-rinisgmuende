import { Component, OnInit } from '@angular/core';
import fleischData from "../../../data/fleisch-data.json" with { type: "json" };

type Tab = 'wissen' | 'bestellen';

@Component({
  selector: 'app-gmuende-fleisch',
  standalone: true,
  imports: [],
  templateUrl: './gmuende-fleisch.component.html',
  styleUrl: './gmuende-fleisch.component.scss'
})
export class GmuendeFleischComponent implements OnInit {
  public activeTab: Tab = 'bestellen';

  public data = fleischData;

  public async ngOnInit(): Promise<void> {
    const module = await import('../../../data/fleisch-data.json', {
      with: { type: "json" },
    });

    console.log(module);

  }
}

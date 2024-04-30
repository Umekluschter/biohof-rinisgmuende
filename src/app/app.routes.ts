import { Routes } from '@angular/router';
import { GmuendeHomeComponent } from '../sites/gmuende-home/gmuende-home.component';
import { GmuendeHofladenComponent } from '../sites/gmuende-hofladen/gmuende-hofladen.component';
import { GmuendeFleischComponent } from '../sites/gmuende-fleisch/gmuende-fleisch.component';
import { GmuendeBestellenComponent } from '../sites/gmuende-bestellen/gmuende-bestellen.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: GmuendeHomeComponent },
    { path: 'hofladen', component: GmuendeHofladenComponent },
    { path: 'fleisch', component: GmuendeFleischComponent },
    { path: 'bestellen', component: GmuendeBestellenComponent },
];

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineComponent } from './components/cine-component/cine-component';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { Tablamultiplicar } from './tablamultiplicar/tablamultiplicar';
import { Menutablamultiplicar } from './menutablamultiplicar/menutablamultiplicar';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cine', component: CineComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'numerodoble', component: NumeroDobleComponent },
  { path: 'numerodoble/:numero', component: NumeroDobleComponent },
  { path: 'tabla/:numero', component: Tablamultiplicar },
  { path: 'menutabla', component: Menutablamultiplicar },
  { path: '**', component: NotFoundComponent },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);

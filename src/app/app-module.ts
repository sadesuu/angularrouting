import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { CineComponent } from './components/cine-component/cine-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { routing } from './app.routing';
import { MenoComponent } from './components/meno-component/meno-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { Tablamultiplicar } from './tablamultiplicar/tablamultiplicar';
import { Menutablamultiplicar } from './menutablamultiplicar/menutablamultiplicar';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    NotFoundComponent,
    MenoComponent,
    NumeroDobleComponent,
    Tablamultiplicar,
    Menutablamultiplicar,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

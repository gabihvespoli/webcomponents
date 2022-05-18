import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardModule } from './components/pokemon-card/pokemon-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PokemonCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

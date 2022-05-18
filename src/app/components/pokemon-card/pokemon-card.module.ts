import { PokemonService } from './pokemon.service';
import { PokemonStatComponent } from './pokemon-stat/pokemon-stat.component';
import { PokemonCardComponent } from './pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [PokemonCardComponent, PokemonStatComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  exports: [PokemonCardComponent],
  providers: [PokemonService],
})
// TODO: P/ WEB-COMPONENT
export class PokemonCardModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const pokemonCardElement = createCustomElement(PokemonCardComponent, {
      injector: this.injector,
    });
    customElements.define('pokemon-card', pokemonCardElement);
  }
}

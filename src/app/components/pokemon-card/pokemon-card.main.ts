import { enableProdMode } from '@angular/core';
import { environment } from './../../../environments/environment.prod';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PokemonCardModule } from './pokemon-card.module';

// TODO: P/ WEB-COMPONENT
if (environment.production) {
  enableProdMode();
}

const bootstrap = () =>
  platformBrowserDynamic().bootstrapModule(PokemonCardModule);
bootstrap().catch((err) => console.error(err));

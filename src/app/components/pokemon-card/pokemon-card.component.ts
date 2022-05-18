import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  // TODO: P/ WEB-COMPONENT
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PokemonCardComponent implements OnInit {
  @Input('pokemon') pokemonName!: string;
  // Apenas exemplo
  @Output('onPokemonLoad') onPokemonLoad: EventEmitter<any> =
    new EventEmitter();

  public pokemon$!: Observable<any>;

  constructor(private _pokemon: PokemonService) {}

  ngOnInit(): void {
    this.pokemon$ = this._pokemon.getPokemon(this.pokemonName);
    this.onPokemonLoad.emit(null);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-stat',
  templateUrl: './pokemon-stat.component.html',
  styleUrls: ['./pokemon-stat.component.scss'],
})
export class PokemonStatComponent {
  @Input('pokemonStat') pokemonStat!: any;

  public pokemonStatMap: Map<string, string> = new Map([
    ['hp', 'HP'],
    ['attack', 'Ataque'],
    ['defense', 'Defesa'],
    ['special-attack', 'Atq. Especial'],
    ['special-defense', 'Def. Especial'],
    ['speed', 'Valocidade'],
    ['accuracy', 'Precisão'],
  ]);

  constructor() {}

  ngOnInit(): void {}
}

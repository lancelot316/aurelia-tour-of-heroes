import { inject, View } from 'aurelia-framework';

import { Hero } from '../hero';
import { HeroService } from 'hero-service';

@inject(HeroService)
export class Dashboard {
  heroes: Hero[];

  constructor(private heroService: HeroService){}

  activate(params, routeConfig, navigationInstruction) {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}

import { observable } from 'aurelia-binding';
import { Hero } from '../hero';
import { HeroService } from 'hero-service';
import { View, inject } from 'aurelia-framework';

@inject(HeroService)
export class Heroes {
  heroes: Hero[];

  constructor(private heroService: HeroService){}

  activate(params, routeConfig, navigationInstruction) {
    this.getHeroes();  
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  } 
}

import { inject } from "aurelia-framework";


import { Hero } from "../hero";
import { HeroService } from '../hero-service';

@inject(HeroService)
export class HeroDetail {
  hero: Hero;

  constructor(private heroService: HeroService){}
  
  activate(params, routeConfig, navigationInstruction) {
    this.getHero(+params.id);
  }

  getHero(id: number): void {
    this.heroService.getHero(id)
      .subscribe(hero => {this.hero = hero; console.log(this.hero)});
  }

  goBack(): void {
    history.back();
  }
}

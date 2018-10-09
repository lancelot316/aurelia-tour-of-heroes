import { inject } from "aurelia-framework";
import { Observable, of } from "rxjs";

import { HEROES } from "mock-heroes";
import { Hero } from "hero";
import { MessageService } from "message-service";

@inject(MessageService)
export class HeroService {

  constructor(private messageSerive: MessageService){}
  getHeroes(): Observable<Hero[]> {
    this.messageSerive.add(`HeroService: fetched heroes`);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageSerive.add(`HeroService: fetched hero: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string) {
    return this.messageSerive.add(`HeroService: ${message}`);
  }
}

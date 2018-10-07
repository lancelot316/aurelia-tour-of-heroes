import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;
  title = 'Tour of Heroes';

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Tour of Heroes";
    
    config.map([
      { route: '', redirect: 'dashboard' },
      { route: '/dashboard', name: 'dashboard', moduleId: PLATFORM.moduleName('dashboard/dashboard'), nav: true, title: 'Dashboard'},
      { route: '/detail/:id', name: 'heroDetail', moduleId: PLATFORM.moduleName('hero-detail/hero-detail'), title: 'HeroDetail' },
      { route: '/heroes', name: 'heroes', moduleId: PLATFORM.moduleName('heroes/heroes'), nav: true, title: 'Heroes' },
    ]);
  }
}

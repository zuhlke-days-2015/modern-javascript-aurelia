import { inject } from 'aurelia-framework';
import {Router} from 'aurelia-router';
 
@inject(Router)
export class App {
  constructor(router) {
    router.configure(config => {
      config.map([
        {route: ['', 'search'], moduleId: 'search/search', nav: true, title: 'Search Movies'},
        {route: 'movies', moduleId: 'movies/movies', nav: true, title: 'Movies'}
      ]);
    });
  }
}
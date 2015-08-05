import {Router} from "aurelia-router";
 
export class App {
  static inject() { return [Router]; }
 
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.map([
        {route: ["", "search"], moduleId: "search/search", nav: true, title: "Search Movies"},
        {route: "movies", moduleId: "movies/movies", nav: true, title: "Movies"}
      ]);
    });
  }
}
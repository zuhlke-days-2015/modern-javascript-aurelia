import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import MovieApi from '../core/movie-api';

@inject(Router)
export class Movies {
    //ES6:
    //static inject() {
    //    return [Router];
    //}

    constructor(router) {
        this.router = router;
    }

    activate(params, queryString, routeConfig) {
        if (params.duration) {
            MovieApi
                .searchByDuration(params.duration)
                .then(data => this.data = data);
        } else {
            this.router.navigate('/search');
        }
    }
}
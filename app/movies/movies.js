import {
    Router
}
from 'aurelia-router';
import MovieApi from '../core/movie-api';

export class Movies {
    static inject() {
        return [Router, MovieApi];
    }

    constructor(route, movieApi) {
        this.route = route;
        this.movieApi = movieApi;
    }

    activate(params, queryString, routeConfig) {
        if (params.duration) {
            this.searchMovie(params.duration);
        } else {
            this.router.navigate('/search');
        }
    }

    searchMovie(duration) {
        this.movieApi
            .searchByDuration(duration)
            .then((movies) => {
                movies.sort(function () {
                    return 0.5 - Math.random()
                });
                this.result = movies.slice(0, 9);
            });
    }
}
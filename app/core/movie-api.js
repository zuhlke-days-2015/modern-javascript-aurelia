const BASEURL = "https://zuhlke-days-2015-movie-api.azurewebsites.net/discover/movie?";
const APIKEY = localStorage.getItem('apikey'); // works on my machine ;-)

import {
    HttpClient
}
from 'aurelia-http-client';

export
default class MovieApi {
    static inject() {
        return [HttpClient];
    }

    constructor(http) {
        this.http = http;
    }

    searchByDuration(duration) {
        var fromDuration = parseInt(duration, 10) * 0.8;
        var params = "runtimeFrom=" + fromDuration + "&runtimeTo=" + duration + "&apikey=" + APIKEY;

        return this.http.get(BASEURL + params)
            .then((response) => {
                return response.content.movies.map((movie) => {
                    movie.omdbImgUrl = movie.omdbImgUrl + '&apikey=' + APIKEY;
                    return movie;
                });
            });
    }
}
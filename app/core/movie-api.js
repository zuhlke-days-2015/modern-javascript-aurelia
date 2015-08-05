import {
    HttpClient
}
from 'aurelia-http-client';

export class MovieApi {
    static inject() {
        return [HttpClient];
    }

    constructor(http) {
        this.http = http;
        
        this.apiKey = localStorage.getItem('apikey'); // works on my machine ;-)
    }

    searchByDuration(duration) {
        var baseUrl = "https://zuhlke-days-2015-movie-api.azurewebsites.net/discover/movie?";

        var fromDuration = parseInt(duration, 10) * 0.8;
        var params = "runtimeFrom=" + fromDuration + "&runtimeTo=" + duration + "&apikey=" + this.apiKey;

        return  this.http.get(baseUrl + params);
    }
}
import {
    Validation
}
from 'aurelia-validation';
import {
    Router
}
from 'aurelia-router';
import GoogleApi from '../core/google-api';


export class Search {
    static inject() {
        return [Validation, Router, GoogleApi];
    }

    constructor(validation, router, googleApi) {
        this.validation = validation.on(this)
            .ensure('from')
            .isNotEmpty()
            .ensure('to')
            .isNotEmpty();

        this.router = router;
        this.googleApi = googleApi;
    }

    search() {
        console.log("Search", this.from, this.to);
        this.googleApi.search(this.from, this.to).then((result) => {
            var duration = result.routes[0].legs[0].duration.value;
            this.router.navigate('/movies' + '?duration=' + duration);
        });
    }
}
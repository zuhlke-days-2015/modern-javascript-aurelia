import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import GoogleApi from '../core/google-api';

@inject(Router)
export class Search {
    //ES6:
    //static inject() {
    //    return [Router];
    //}

    constructor(router) {
        this.router = router;
    }

    search() {
        GoogleApi.search(this.from, this.to).then((result) => {
            let duration = result.routes[0].legs[0].duration.value;
            this.router.navigate(`/movies?duration=${duration}`);
        });
    }
}
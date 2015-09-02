import { bindable } from 'aurelia-framework';

export class MovieTile {
    // ES7
    @bindable imdbUrl = '';
    @bindable imageUrl = '';
    @bindable title = '';
    @bindable runtime = '';
    @bindable rating = '';

}
import { Component } from '@angular/core';
import { Dropdown, Ripple, initTE } from 'tw-elements';
import { AppContextService } from 'src/app/services/app-context.service';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent {
    searchText: string;
    searchOptions: string[];
    selectedOption: string;

    constructor(private appContextService: AppContextService) {
        this.searchText = ""
        this.searchOptions = ["Title", "Author", "Subject"]
        this.selectedOption = this.searchOptions[0]
    }

    ngOnInit() {
        initTE({ Dropdown, Ripple });
    }

    logBooksToConsole() {
        const booksObservable = this.appContextService.fetchBooks('Harry Potter');
        booksObservable.subscribe((data) => {
            console.log(data);
        });
    }

    selectCategory( value: string){
        this.selectedOption = value;
    }
}
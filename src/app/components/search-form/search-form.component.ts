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
    dataSource: any;

    constructor(private appContextService: AppContextService) {
        this.searchText = ""
        this.searchOptions = ["title", "author", "subject"]
        this.selectedOption = this.searchOptions[0]
        this.dataSource = []
    }

    ngOnInit() {
        initTE({ Dropdown, Ripple });
    }

    logBooksToConsole() {
        const booksObservable = this.appContextService.fetchData(this.selectedOption, this.searchText);
        booksObservable.subscribe((books) => {
            this.dataSource = books.docs.map((singleBook : any) => {
                return {
                  ...singleBook,
                  // removing /works/ to get only id
                  id: singleBook.key.replace("/works/", ""),
                  cover_img:  `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
                }
              });
        });
    }

    selectCategory( value: string){
        this.selectedOption = value;
    }

    readInput(event: any ){
        this.searchText = event.target.value
        console.log(this.searchText)
    }
}
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppContextService } from 'src/app/services/app-context.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})

export class BookPageComponent {
  dataSource: any; // Define the property to store the book details
  constructor( ) { }

  ngOnInit() {
    const state = window.history.state;
    if (state && state.data) {
      this.dataSource = state.data; // Assign the dataSource from the router extras to the property
    }
  }
}

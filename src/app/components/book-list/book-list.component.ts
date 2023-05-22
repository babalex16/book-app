import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
  })

  export class BookListComponent implements OnInit {
    @Input() dataSource: any;
    
    ngOnInit(): void {
    }
  }

  
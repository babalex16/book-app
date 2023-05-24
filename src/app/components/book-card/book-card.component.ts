import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})

export class BookCardComponent {
    @Input() dataSource: any;

    constructor(private router: Router) { }

  navigateToBookPage(dataSource: any) {
    this.router.navigate(['book', dataSource.id], { state: { data: dataSource } });
  }
}

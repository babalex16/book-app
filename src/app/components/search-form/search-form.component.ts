import { Component } from '@angular/core'; 
import { Dropdown, Ripple, initTE } from 'tw-elements';

@Component({ 
    selector: 'app-search-form', 
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css']
 }) 
 export class SearchFormComponent {
    ngOnInit() {
        initTE({ Dropdown, Ripple });
    }
}
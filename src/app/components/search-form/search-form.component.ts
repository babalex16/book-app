import { Component } from '@angular/core'; 
import { Dropdown, Ripple, initTE } from 'tw-elements';

@Component({ 
    selector: 'app-search-form', 
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css']
 }) 

 export class SearchFormComponent {

    //TODO массив CategorySearch 3 стринга внутри Books title Subject 

    ngOnInit() {
        initTE({ Dropdown, Ripple });
    }
}
import { Component } from '@angular/core';
import { Collapse, Dropdown, initTE } from 'tw-elements';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  ngOnInit() {
      initTE({ Collapse, Dropdown });
  }
}

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare let testWidget: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scroll-test-app';
  constructor(public router: Router) {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        testWidget('get_advertisement', {
          title: 'Welcome to Krusty Burger!',
          specialOffer: 'Steamed Hams',
          postScriptum: 'Its not fire, its aurora borealis.'
        });
      }
    })
  };
}

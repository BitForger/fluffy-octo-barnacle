import { Component, Input, OnInit }     from '@angular/core';
import { HomeService }                  from '../../services/home/home.service';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.scss'],
  providers: [HomeService]
})
export class HeaderComponent implements OnInit {

  @Input()
  hideToolbar = true;

  @Input() nav: any;

  invert = false;

  constructor(private homeService: HomeService, private router: Router) {
  }

  ngOnInit() {
    setTimeout(() => this.hideToolbar = false, 500);
    if ( this.router.url !== '/' ) {
      this.hideToolbar = false;
    }

    this.router.events.subscribe((evt: Event) => {
      if ( evt instanceof NavigationEnd) {
        this.invert = (evt.url !== '/');
      }
    });
  }

}

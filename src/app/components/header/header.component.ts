import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { HomeService }                                                                  from '../../services/home/home.service';
import { Event, NavigationEnd, Router }                                                 from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.scss'],
  providers: [HomeService]
})
export class HeaderComponent implements OnInit {

  @Input()
  public hideToolbar = true;

  @Input()
  public invert = false;

  @Input()
  public loading = true;

  @Input()
  public homeActive;

  constructor() {
  }

  ngOnInit() {
    console.log('init', this.hideToolbar);
    console.log('invert', this.invert);
  }

}

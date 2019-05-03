import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger }     from '@angular/animations';
import { HomeService }                                    from '../../../services/home/home.service';
import { CookieService }                                  from 'ngx-cookie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('visibleHidden', [
      state('visible', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('.7s')
      ])
    ]),
    trigger('mainJumbo', [
      state('visible', style({
        opacity: 0,
        animation: 'tracking-in-expand .7s cubic-bezier(.215,.61,.355,1.000) both',
      })),
      transition('void => *', [
        style({
          opacity: 0,
        }),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  @Output() showHeader: EventEmitter<any> = new EventEmitter();
  @Input() homeSplashActive;

  private possibleActiveDivs = [
    'div1',
    'div2',
    'div3',
    'div4'
  ];

  activeDiv = this.possibleActiveDivs[0];
  constructor(private homeService: HomeService, private cookieService: CookieService) {
  }

  ngOnInit() {
    const splashCompleteCookie = this.cookieService.get('splashComplete');

    if ( !splashCompleteCookie ) {
      if (this.homeSplashActive === undefined) {
        this.homeSplashActive = true;
      }
      setTimeout(() => this.beginLoop(), 2500);
    } else {
      this.hideSplash();
    }
  }

  private async beginLoop(currentIndex = 0) {
    if ( currentIndex < this.possibleActiveDivs.length) {
      currentIndex++;
      this.activeDiv = this.possibleActiveDivs[currentIndex];
      await setTimeout(async () => this.beginLoop(currentIndex), 2500);
    } else {
      this.hideSplash();
      this.cookieService.put('splashComplete', 'true', {
        expires: new Date(new Date().setFullYear(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay()))
      });
    }
  }

  private async hideSplash() {
    // TODO figure out a better way to make the top bar show without using a timeout
    await setTimeout(() => {}, 500);
    this.homeService.toggle(true);
    this.homeSplashActive = false;
  }
}

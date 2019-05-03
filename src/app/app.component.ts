import { Component, Input } from '@angular/core';
import { HomeService }      from './services/home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss'],
  providers: [HomeService]
})
export class AppComponent {
  title = 'Polar Bear Digital';

  @Input()
  shouldHeaderBeVisible = false;

  constructor(private homeService: HomeService) {
    this.homeService.toggle$.subscribe(() => {
      console.log('should be showing toolbar');
      this.shouldHeaderBeVisible = true;
    });
  }
}

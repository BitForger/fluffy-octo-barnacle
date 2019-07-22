import { Component, Input, OnInit } from '@angular/core';
import { HomeService }              from '../../services/home/home.service';
import { HeaderService }            from '../../services/header/header.service';

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

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.isLoading.subscribe((loadingStatus) => {
      this.loading = loadingStatus;
    });
  }

}

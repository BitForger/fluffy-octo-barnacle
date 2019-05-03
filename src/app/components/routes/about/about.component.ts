import { Component, OnInit } from '@angular/core';
import { HomeService }       from '../../../services/home/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.pug',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private hs: HomeService) { this.hs.toggle(true); }

  ngOnInit() {
  }

}

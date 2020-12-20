import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { map, tap }          from 'rxjs/operators';
import { DomSanitizer }      from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.pug',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public id: string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(tap(x => console.log(x)))
      .pipe(map(value => this.id = value.get('id')))
      .subscribe();
  }

  sanitizeURL(string: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }
}

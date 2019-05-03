import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _toggle = new Subject();
  toggle$ = this._toggle.asObservable();

  toggle(val) {
    this._toggle.next(val);
  }
  constructor() { }
}

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  private loading: Subject<boolean> = new Subject();
  public isLoading = this.loading.asObservable();

  constructor() { }

  public updateIsLoading(value: boolean) {
    this.loading.next(value);
  }
}

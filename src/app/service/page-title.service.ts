import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private pageTitle = new Subject<string>();

  public pageTitleSubscriber = this.pageTitle.asObservable();

  constructor() { }

  public onNotifyPageTitleChanged(updated: string) {
    this.pageTitle.next(updated);
  }
}

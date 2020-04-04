import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {PageTitleService} from '../service/page-title.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  public pageTitle = '日本';

  private subscription: Subscription;

  constructor(
    public sidenav: SidenavComponent,
    private pageTitleService: PageTitleService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.pageTitleService.pageTitleSubscriber.subscribe(pageTitle => {
      this.pageTitle = pageTitle;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav(): void {
    this.sidenav.sidenav.toggle()
      .catch(err => console.log(err));
  }
}

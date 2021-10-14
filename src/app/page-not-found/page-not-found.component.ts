import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { ChangeBackgroundService } from "../core/service/change-background.service"

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  elementSubscribe$: Subscription
  colorBackground: boolean = false
  constructor(
    private changeBackgroundService: ChangeBackgroundService
  ) {
    this.elementSubscribe$ = this.changeBackgroundService.Background$
    .subscribe(item => {
      this.colorBackground = item
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.elementSubscribe$.unsubscribe()
  }
}

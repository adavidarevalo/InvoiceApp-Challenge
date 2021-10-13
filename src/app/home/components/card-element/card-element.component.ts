import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Element, elementContainer} from '../../../models/element.model'
import { Subscription } from 'rxjs'
import { ChangeBackgroundService } from '../../../core/service/change-background.service'

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent implements OnInit, OnDestroy {
  @Input() itemContainer: Element = elementContainer;
  paymentButton: boolean = false
  date: number = 0
  colorBackground: boolean = false
  elementSubscribe$: Subscription;

  constructor(
    private changeBackgroundService: ChangeBackgroundService
  ) { 
    this.numberTransform()
    this.elementSubscribe$ = this.changeBackgroundService.Background$
    .subscribe(item => {
      this.colorBackground = item
    })
  }

  ngOnInit(): void {
  }
  numberTransform(){
    this.date = 0
    this.date =  Number(this.itemContainer.Date)
  }
  ngOnDestroy() {
    this.elementSubscribe$.unsubscribe()
  }
}
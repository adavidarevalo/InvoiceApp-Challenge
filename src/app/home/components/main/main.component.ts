import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../../../core/service/card.service'
import { Element, Task } from '../../../models/element.model'
import { Subscription } from 'rxjs'
import { ChangeBackgroundService } from '../../../core/service/change-background.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  newProduct: boolean = false
  Element: Element[] = []
  filterElement: Element[] = []
  filterContainer: Array<string> = []
  colorBackground: boolean = false
  elementSubscribe$: Subscription

  constructor(
    private cardService: CardService,
    private changeBackgroundService: ChangeBackgroundService
  ) {
    this.Element = this.cardService.returnElements()
    this.filterElement = this.Element
    this.elementSubscribe$ = this.changeBackgroundService.Background$
    .subscribe(item => {
      this.colorBackground = item
    })
  }

  ngOnInit(): void {
  }

  ChangeNewProduct(){
    this.newProduct = !this.newProduct
    this.filterElement = this.Element
  }


  filterElements(element: Task[]){
    this.filterContainer = []
    this.filterElement = []
    element.filter(item => item.completed === true && this.filterContainer.push(item.name))
    if(this.filterContainer.length === 0){
      this.filterElement = this.Element
    }
     for (var i = 0; i < this.filterContainer.length; i++) {
      this.filterElement = [...this.filterElement, ...this.Element.filter(item => item.state === this.filterContainer[i])]
    }
  }
  ngOnDestroy() {
    this.elementSubscribe$.unsubscribe()
  }
}

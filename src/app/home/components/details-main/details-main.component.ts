import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { CardService } from '../../../core/service/card.service'
import {Element} from '../../../models/element.model'
import { Location } from '@angular/common'
import { ChangeBackgroundService } from '../../../core/service/change-background.service'
import { Subscription } from 'rxjs';
import { PlusAllCardsService }  from "../../../core/service/plus-all-cards.service"

@Component({
  selector: 'app-details-main',
  templateUrl: './details-main.component.html',
  styleUrls: ['./details-main.component.scss']
})
export class DetailsMainComponent implements OnInit, OnDestroy {
  element: Element | any = null
  colorBackground: boolean = false
  elementSubscribe$: Subscription;
  editContainer: boolean = false
  totalPrice: number= 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService,
    private route: Location,
    private changeBackgroundService: ChangeBackgroundService,
    private plusAllCardsService: PlusAllCardsService
  ) {
    this.elementSubscribe$ = this.changeBackgroundService.Background$
    .subscribe(item => {
      this.colorBackground = item
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.element = this.cardService.findId(params.id)
      console.log("XXX ", this.element[0].ItemList)
      this.totalPrice = this.plusAllCardsService.plusAllCards(this.element[0].ItemList)
    })
  }

  Delete(){
    this.cardService.delete(this.element[0].id)
    this.Back()
  }
  Back(){
    this.route.back()
  }
  ChangeStatus(){
    this.cardService.changeStatus(this.element[0].id)
  }
  ChangeEdit(){
    this.editContainer = !this.editContainer
  }
  ngOnDestroy() {
    console.log('Destroy')
    this.elementSubscribe$.unsubscribe()
  }
  ChangeElement(NewItem : Element ){
    this.element = NewItem
  }

}

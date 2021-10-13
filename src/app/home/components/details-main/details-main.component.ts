import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router' 
import { CardService } from '../../../core/service/card.service'
import {Element} from '../../../models/element.model'
import { Location } from '@angular/common'
import { ChangeBackgroundService } from '../../../core/service/change-background.service'
import { Subscription } from 'rxjs';


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

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService,
    private route: Location,
    private changeBackgroundService: ChangeBackgroundService
  ) {
    this.elementSubscribe$ = this.changeBackgroundService.Background$
    .subscribe(item => {
      this.colorBackground = item
      console.log('yes ')
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.element = this.cardService.findId(params.id)
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
    console.log('change')
    this.cardService.changeStatus(this.element[0].id)
  }
  ChangeEdit(){
    this.editContainer = !this.editContainer
  }
  ngOnDestroy() {
    console.log('Destroy')
    this.elementSubscribe$.unsubscribe()
  }

}

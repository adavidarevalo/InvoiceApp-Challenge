import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router' 
import { CardService } from '../../../core/service/card.service'
import {Element} from '../../../models/element.model'
import { Location } from '@angular/common'

@Component({
  selector: 'app-details-main',
  templateUrl: './details-main.component.html',
  styleUrls: ['./details-main.component.scss']
})
export class DetailsMainComponent implements OnInit {
  element: Element | any = null

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService,
    private route: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.element = this.cardService.findId(params.id)
      console.log('as ', this.element)
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

}

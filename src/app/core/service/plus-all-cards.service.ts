import { Injectable } from '@angular/core';
import { ItemList } from "../../models/element.model"

@Injectable({
  providedIn: 'root'
})
export class PlusAllCardsService {
  PlusContainer: number = 0
  constructor() { }

  plusAllCards(item: ItemList[] | undefined){
    this.PlusContainer = 0
    if(item){
    for (let i = 0; i < item.length; i++) {
      this.PlusContainer = this.PlusContainer + (item[i].Qty * item[i].Price  )
    }
    }
    return this.PlusContainer
  }
}

import { Injectable } from '@angular/core';
import { Element } from '../../models/element.model'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  products: Element[] = []

  returnElements(){
    return this.products
  }

  findId(Id: string){
    return this.products.filter(item => item.id === Id)
  }

  delete(Id: string){
    this.products = this.products.filter(item => item.id !== Id)
  }
  changeStatus(Id: string){
    this.products.filter(item => item.id === Id && (item.state = 'paid'))
  }
  add(element: Element){
    this.products.push(element)
  }
  edit(element: Element){
    this.delete(element.id)
    this.add(element)

  }

  constructor() { }
}

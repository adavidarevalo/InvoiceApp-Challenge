import { Injectable } from '@angular/core';
import { Element } from '../../models/element.model'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  products: Element[] = [
    {
      id: 'HIJ',
      state: 'paid',
      Address: 'Elemet',
      city: 'asdasdasd',
      postCode: 'asdasdasd',
      country: 'asdasdasd',
      ClientName: 'asdasdasd',
      ClientEmail: 'asdasdasd',
      ClientAddress: 'asdasdasd',
      ClientCity: 'asdasdas',
      ClientCode: 'dasdasdasd',
      ClientCountry: 'asdasdasd',
      Date: 'asdasd',
      PayTerms: 'asdasdasd',
      description: 'asdasdasd',
      ItemList : [
        {
          itemName: 'asdasdasd',
          Qty: 0,
          Price: 0,
        }
      ]
    },
    {
      id: 'DFG',
      state: 'pending',
      Address: 'Elemet 2',
      city: 'asdasdasd',
      postCode: 'asdasdasd',
      country: 'asdasdasd',
      ClientName: 'asdasdasd',
      ClientEmail: 'asdasdasd',
      ClientAddress: 'asdasdasd',
      ClientCity: 'asdasdas',
      ClientCode: 'dasdasdasd',
      ClientCountry: 'asdasdasd',
      Date: 'asdasd',
      PayTerms: 'asdasdasd',
      description: 'asdasdasd',
      ItemList : [
        {
          itemName: 'asdasdasd',
          Qty: 0,
          Price: 0,
        }
      ]
    },
    {
      id: 'ABC',
      state: 'draft',
      Address: 'Elemet',
      city: 'asdasdasd',
      postCode: 'asdasdasd',
      country: 'asdasdasd',
      ClientName: 'asdasdasd',
      ClientEmail: 'asdasdasd',
      ClientAddress: 'asdasdasd',
      ClientCity: 'asdasdas',
      ClientCode: 'dasdasdasd',
      ClientCountry: 'asdasdasd',
      Date: 'asdasd',
      PayTerms: 'asdasdasd',
      description: 'asdasdasd',
      ItemList : [
        {
          itemName: 'asdasdasd',
          Qty: 0,
          Price: 0,
        },
        {
          itemName: 'asdasdasd',
          Qty: 0,
          Price: 0,
        }
      ]
    }
  ]

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
    console.log('true babe')
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

import { Injectable } from '@angular/core';
import { Element } from '../../models/element.model'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  products: Element[] = [
    {
      id: 'HIJ',
      state: 'valid',
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
      state: 'invalid',
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
      state: 'block',
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
    }
  ]

  returnElements(){
    return this.products
  }

  constructor() { }
}

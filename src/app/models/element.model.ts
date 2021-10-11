export interface ItemList {
    itemName: string,
    Qty: number,
    Price: number,
} 

export interface Element {
    id:string,
    state: string,
    Address: string,
    city: string,
    postCode: string,
    country: string,
    ClientName: string,
    ClientEmail: string,
    ClientAddress: string,
    ClientCity: string,
    ClientCode: string,
    ClientCountry: string,
    Date: string,
    PayTerms: string,
    description: string,
    ItemList?: ItemList[]
}

export const elementContainer = {
    id: '',
    state: '',
    Address: '',
    city: '',
    postCode: '',
    country: '',
    ClientName: '',
    ClientEmail: '',
    ClientAddress: '',
    ClientCity: '',
    ClientCode: '',
    ClientCountry: '',
    Date: '',
    PayTerms: '',
    description: '',
    ItemList : [
      {
        itemName: '',
        Qty: 0,
        Price: 0,
      }
    ]
  }

export interface Task {
  name: string,
  completed: boolean,
  color: string
}
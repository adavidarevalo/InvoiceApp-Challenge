import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ItemList } from '../../../models/element.model'

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss']
})

export class CreateNewProductComponent implements OnInit {
  formCreate: FormGroup = new FormGroup({});
  @Input() ShowElement: boolean = false;
  @Output() NewElement: EventEmitter<boolean> = new EventEmitter();
  id: string = ''

  ItemList: ItemList[] =[
    {
      itemName: '',
      Qty: 0,
      Price: 0
    }
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.changeId()
    this.formCreate = this.formBuilder.group({
      Address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      ClientName: ['', [Validators.required]],
      ClientEmail: ['', [Validators.required, Validators.email]],
      ClientAddress: ['', [Validators.required]],
      ClientCity: ['', [Validators.required]],
      ClientCode: ['', [Validators.required]],
      ClientCountry: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      PayTerms: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
    console.log('xxx ', this.ShowElement)
  }
  generateId(){
    return Math.random().toString(36).substr(2, 18);
  }

  send(){
    console.log(this.formCreate.value)
  }
  closeForm(){
    this.NewElement.emit(false);
    this.changeId()
    this.formCreate.reset()
  }
  changeId(){
    this.id = this.generateId()
  }
  AddNewItem(){
    console.log('yes baby ', this.ItemList)
    console.log('yes baby ', this.ItemList[0].itemName)
    this.ItemList.push(
      {
        itemName: '',
        Qty: 0,
        Price: 0
      }
    )
  }
  deleteItem(i: number){
    this.ItemList.splice(i, 1)
  }

}

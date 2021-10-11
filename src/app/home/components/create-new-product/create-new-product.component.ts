import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ItemList } from '../../../models/element.model'
import { CardService } from '../../../core/service/card.service'

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
  error: boolean = false

  ItemList: ItemList[] =[
    {
      itemName: '',
      Qty: 0,
      Price: 0
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService
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
      Date: [Date.now(), [Validators.required]],
      PayTerms: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }
  generateId(){
    return Math.random().toString(36).substr(2, 18);
  }

  send(state: string){
    this.error = this.formCreate.invalid
    setTimeout(() => {
      this.error = false
    }, 3000);
    this.formCreate.value.state = state
    this.createNew()
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
  createNew(){
    if(!this.error){
      this.formCreate.value.id = this.id
      this.formCreate.value.ItemList = this.ItemList
      this.cardService.add(this.formCreate.value)
      this.closeForm()
    }
  }

}
//[disabled]='formCreate.invalid'
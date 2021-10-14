import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ItemList } from '../../../models/element.model'
import { CardService } from '../../../core/service/card.service'
import { Element } from '../../../models/element.model'
import { Subscription } from 'rxjs';
import { ChangeBackgroundService } from '../../../core/service/change-background.service'

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss']
})

export class CreateNewProductComponent implements OnInit, OnDestroy {
  formCreate: FormGroup = new FormGroup({});
  @Input() ShowElement: boolean = false;
  @Input() edit: Element[] | null= null;
  @Output() NewElement: EventEmitter<boolean> = new EventEmitter();
  @Output() SendChanges: EventEmitter<Element> = new EventEmitter()
  id: string = ''
  error: boolean = false
  colorBackground: boolean = false
  elementSubscribe$: Subscription;

  ItemList: ItemList[] =[
    {
      itemName: '',
      Qty: 0,
      Price: 0
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private changeBackgroundService: ChangeBackgroundService
  ) {
    this.elementSubscribe$ = this.changeBackgroundService.Background$
    .subscribe(item => {
      this.colorBackground = item
    })
  }

  ngOnInit(): void {
    this.changeId()
    this.formCreate = this.formBuilder.group({
      Address: [this.edit ? this.edit[0].Address :'', [Validators.required]],
      city: [this.edit ? this.edit[0].city :'', [Validators.required]],
      postCode: [this.edit ? this.edit[0].postCode :'', [Validators.required]],
      country: [this.edit ? this.edit[0].country :'', [Validators.required]],
      ClientName: [this.edit ? this.edit[0].ClientName :'', [Validators.required]],
      ClientEmail: [this.edit ? this.edit[0].ClientEmail :'', [Validators.required, Validators.email]],
      ClientAddress: [this.edit ? this.edit[0].ClientAddress :'', [Validators.required]],
      ClientCity: [this.edit ? this.edit[0].ClientCity :'', [Validators.required]],
      ClientCode: [this.edit ? this.edit[0].ClientCode :'', [Validators.required]],
      ClientCountry: [this.edit ? this.edit[0].ClientCountry :'', [Validators.required]],
      Date: [this.edit ? this.edit[0].Date :'', [Validators.required]],
      PayTerms: [this.edit ? this.edit[0].PayTerms :'', [Validators.required]],
      description: [this.edit ? this.edit[0].description :'', [Validators.required]]
    })
    if(this.edit){
      this.ItemList = this.edit[0].ItemList ? this.edit[0].ItemList : this.ItemList
    }
  }
  generateId(){
    if(this.edit){
      return this.edit[0].id
    } else{
      return Math.random().toString(36).substr(2, 18);
    }
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
    if(!this.edit){
      this.changeId()
      this.formCreate.reset()
    }
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
    if(!this.error && this.edit){
      this.formCreate.value.id = this.edit[0].id
      this.formCreate.value.ItemList = this.ItemList
      this.cardService.edit(this.formCreate.value)
      this.SendChanges.emit(this.formCreate.value);
      this.closeForm()
    } else if(!this.error){
      this.formCreate.value.id = this.id
      this.formCreate.value.ItemList = this.ItemList
      this.cardService.add(this.formCreate.value)
      this.closeForm()
    }
  }
  ngOnDestroy() {
    this.elementSubscribe$.unsubscribe()
  }
}

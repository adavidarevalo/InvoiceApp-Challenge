import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/service/card.service'
import { Element } from '../../../models/element.model'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  newProduct: boolean = false
  Element: Element[] = []

  constructor(
    private cardService: CardService
  ) {
    this.Element = this.cardService.returnElements()
    console.log('Element ', this.Element)
  }

  ngOnInit(): void {
  }

  ChangeNewProduct(){
    console.log('x ', this.newProduct)
    this.newProduct = !this.newProduct
  }

}

import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/service/card.service'
import { Element, Task } from '../../../models/element.model'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  newProduct: boolean = false
  Element: Element[] = []
  filterElement: Element[] = []
  filterContainer: Array<string> = []

  constructor(
    private cardService: CardService
  ) {
    this.Element = this.cardService.returnElements()
    this.filterElement = this.Element
    console.log('xxx ', this.filterElement.length)
  }

  ngOnInit(): void {
  }

  ChangeNewProduct(){
    this.newProduct = !this.newProduct
    this.filterElement = this.Element
  }


  filterElements(element: Task[]){
    if(this.filterContainer.length === 0){
      this.filterElement = this.Element
    }
    this.filterElement = []
    this.filterContainer = []
    element.filter(item => item.completed === true && this.filterContainer.push(item.name))

    this.filterElement = this.Element.filter(item => item.state.includes(this.filterContainer.toString()))
    console.log('saa ', this.filterContainer.toString())
    console.log('sa ', this.filterElement)
  }

}

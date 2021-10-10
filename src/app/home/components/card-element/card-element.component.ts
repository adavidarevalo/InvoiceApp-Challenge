import { Component, OnInit, Input } from '@angular/core';
import {Element, elementContainer} from '../../../models/element.model'
@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent implements OnInit {
  @Input() itemContainer: Element = elementContainer;
  paymentButton: boolean = false

  constructor() { }

  ngOnInit(): void {
    console.log('MMM ',this.itemContainer)
  }

}

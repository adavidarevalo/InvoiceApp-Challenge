import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})
export class NabvarComponent implements OnInit {
  panelOpenState = false;
  @Output() NewElement: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  changePanel(){
    this.panelOpenState = !this.panelOpenState
  }

  NewProduct(){
    this.NewElement.emit(false);
  }

}

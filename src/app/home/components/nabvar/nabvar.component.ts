import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import {Task} from '../../../models/element.model'
import { Subscription } from 'rxjs'
import { ChangeBackgroundService } from '../../../core/service/change-background.service'

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})



export class NabvarComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  @Output() NewElement: EventEmitter<boolean> = new EventEmitter();
  @Output() NavFilter: EventEmitter<Task[]> = new EventEmitter()
  @Input() count: number = 0
  colorBackground: boolean = false
  elementSubscribe$: Subscription

  constructor(
    private changeBackgroundService: ChangeBackgroundService
  ) { 
    this.elementSubscribe$ = this.changeBackgroundService.Background$
    .subscribe(item => {
      this.colorBackground = item
    })
  }

  ngOnInit(): void {
  }

  changePanel(){
    this.panelOpenState = !this.panelOpenState
  }

  NewProduct(){
    this.NewElement.emit(false);
  }

  //Checkbox
  task: Task[] =  [
      {name: 'paid', completed: false, color: 'primary'},
      {name: 'pending', completed: false, color: 'primary'},
      {name: 'draft', completed: false, color: 'primary'}
    ]

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task != null && this.task.every((t: any) => t.completed);
    console.log('a ', this.task)
    this.NavFilter.emit(this.task);
  }
  ngOnDestroy() {
    this.elementSubscribe$.unsubscribe()
  }
}


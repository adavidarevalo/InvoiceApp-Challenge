import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeBackgroundService {
  private BackgroundCont: boolean = false
  private BC = new BehaviorSubject(false)

  constructor() { }
  Background$ = this.BC.asObservable()

  changeBackground(){
    this.BackgroundCont = !this.BackgroundCont
    this.BC.next(this.BackgroundCont)
    console.log('change background')
  } 
}

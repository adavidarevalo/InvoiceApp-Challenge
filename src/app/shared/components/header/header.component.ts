import { Component, OnInit } from '@angular/core';
import { ChangeBackgroundService } from '../../../core/service/change-background.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  BackgrondColor: boolean = false

  constructor(
    private changeBackgroundService: ChangeBackgroundService
  ) { }

  ngOnInit(): void {
  }

  ChangeBackground(){
    this.BackgrondColor = !this.BackgrondColor
    this.changeBackgroundService.changeBackground()
    console.log('yes baby')
  }

}

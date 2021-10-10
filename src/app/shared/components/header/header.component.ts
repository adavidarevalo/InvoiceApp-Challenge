import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  BackgrondColor: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  ChangeBackground(){
    this.BackgrondColor = !this.BackgrondColor
  }

}

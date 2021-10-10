import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  auth: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  changeAuth(){
    this.auth = !this.auth
  }

}

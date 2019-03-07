import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  searchClicked: boolean;
  mailClicked: boolean;

  ngOnInit() {
    this.searchClicked = false;
    this.mailClicked = false;
  }

  clickSearch() {
    this.searchClicked = !this.searchClicked;
  }

  clickMail() {
    this.mailClicked = !this.mailClicked;
  }

}

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private searchService : SearchService) { }

  search: string;
  
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

  changeSearch(input: string){
    this.searchService.changeSearch(input);
  }

}

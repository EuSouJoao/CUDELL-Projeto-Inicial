import { Component, OnInit } from '@angular/core';
import { OPTIONS } from '../menu-options';
import { SelectionService } from '../selection.service'

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  options = OPTIONS;
  
  selectedZero: boolean;
  selectedTwo: boolean;
  selectedThree: boolean;
  selectedOne : boolean;
  
  constructor(SelectionService : SelectionService) { 
    this.selectedZero = false;
    this.selectedOne = false;
    this.selectedTwo = false;
    this.selectedThree = false;
  }

  ngOnInit() {
  }

  selectZero(){
    this.selectedZero = !this.selectedZero;
    this.selectedOne = false;
    //selected = this.selectedOne;
    this.selectedTwo = false;
    this.selectedThree = false;
  }

  selectOne(){
    this.selectedOne = !this.selectedOne;
    //selected = this.selectedOne;
    this.selectedZero = false;
    this.selectedTwo = false;
    this.selectedThree = false;
  }

  selectTwo(){
    this.selectedTwo = !this.selectedTwo;
    this.selectedZero = false;
    this.selectedOne = false;
    //selected = this.selectedOne;
    this.selectedThree = false;

  }

  selectThree(){
    this.selectedThree = !this.selectedThree;
    this.selectedZero = false;
    this.selectedOne = false;
    //selected = this.selectedOne;
    this.selectedTwo = false;
  }

}

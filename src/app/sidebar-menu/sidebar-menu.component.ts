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

  selection: string;
  
  selectedZero: boolean;
  selectedTwo: boolean;
  selectedThree: boolean;
  selectedOne : boolean;
  
  constructor(private selectionService : SelectionService) { 
    
    
    this.selectedZero = false;
    this.selectedOne = false;
    this.selectedTwo = false;
    this.selectedThree = false;
  }

  ngOnInit() {
    this.selectionService.currentSelection.subscribe(selection => this.selection);
  }

  selectZero(){
    this.selectedZero = !this.selectedZero;
    if (!this.selectedZero) {
      this.selectionService.changeSelection("none");
    } else {
      this.selectionService.changeSelection(this.options[0].name);
    }
    this.selectedOne = false;
    this.selectedTwo = false;
    this.selectedThree = false;
  }

  selectOne(){
    this.selectedOne = !this.selectedOne;
    
    if (!this.selectedOne) {
      this.selectionService.changeSelection("none");
    } else {
      this.selectionService.changeSelection(this.options[1].name);
    }

    this.selectedZero = false;
    this.selectedTwo = false;
    this.selectedThree = false;
  }

  selectTwo(){
    this.selectedTwo = !this.selectedTwo;

    if (!this.selectedTwo) {
      this.selectionService.changeSelection("none");
    } else {
      this.selectionService.changeSelection(this.options[2].name);
    }

    this.selectedZero = false;
    this.selectedOne = false;
    this.selectedThree = false;

  }

  selectThree(){
    this.selectedThree = !this.selectedThree;

    if (!this.selectedThree) {
      this.selectionService.changeSelection("none");
    } else {
      this.selectionService.changeSelection(this.options[3].name);
    }
    
    this.selectedZero = false;
    this.selectedOne = false;
    this.selectedTwo = false;
  }

}

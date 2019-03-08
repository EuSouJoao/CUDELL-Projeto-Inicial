import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-tables-container',
  templateUrl: './tables-container.component.html',
  styleUrls: ['./tables-container.component.scss']
})
export class TablesContainerComponent implements OnInit {

  selection: string;
  
  constructor(private selectionService : SelectionService) {
    
   }

  ngOnInit() {
    this.selectionService.currentSelection.subscribe(selection => this.selection = selection);
  }

}

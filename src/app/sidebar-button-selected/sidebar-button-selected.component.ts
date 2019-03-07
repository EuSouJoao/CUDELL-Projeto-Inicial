import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-button-selected',
  templateUrl: './sidebar-button-selected.component.html',
  styleUrls: ['./sidebar-button-selected.component.scss']
})
export class SidebarButtonSelectedComponent implements OnInit {

  @Input()
  option: string;

  constructor() { }

  ngOnInit() {
  }

}

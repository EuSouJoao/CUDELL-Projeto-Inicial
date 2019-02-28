import { Component, OnInit } from '@angular/core';
import { OPTIONS } from '../menu-options';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  options = OPTIONS;
  
  constructor() { }

  ngOnInit() {
  }

}

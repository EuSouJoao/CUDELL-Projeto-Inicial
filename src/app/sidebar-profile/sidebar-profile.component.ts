import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sidebar-profile',
  templateUrl: './sidebar-profile.component.html',
  styleUrls: ['./sidebar-profile.component.scss']
})
export class SidebarProfileComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  name: string;

  ngOnInit() {
    this.apiService.getUsername().subscribe((res) => {this.name = res})
  }

}

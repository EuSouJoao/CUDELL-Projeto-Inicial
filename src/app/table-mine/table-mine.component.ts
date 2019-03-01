import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Fatura } from '../fatura';

@Component({
  selector: 'app-table-mine',
  templateUrl: './table-mine.component.html',
  styleUrls: ['./table-mine.component.scss']
})
export class TableMineComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  faturas: Fatura[];

  ngOnInit() {
    this.apiService.getMyFaturas().subscribe((res) => {this.faturas = res});
  }

}

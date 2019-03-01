import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Fatura } from '../fatura';

@Component({
  selector: 'app-table-pending',
  templateUrl: './table-pending.component.html',
  styleUrls: ['./table-pending.component.scss']
})

export class TablePendingComponent implements OnInit {

  url = 'http://localhost:2900/api/faturaspendentes';

  constructor(private apiService : ApiService) { }

  faturas: Fatura[];

  ngOnInit() {
    this.apiService.getPendingFaturas().subscribe((res) => {this.faturas = res});
  }

}

import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material';
import { ApiService } from '../api.service';
import { Fatura } from '../fatura';

@Component({
  selector: 'app-table-pending',
  templateUrl: './table-pending.component.html',
  styleUrls: ['./table-pending.component.scss']
})

export class TablePendingComponent implements OnInit {

  url = 'http://localhost:2900/api/faturaspendentes';

  page: number;

  constructor(private apiService: ApiService) { }

  faturas: Fatura[];

  faturasBackground: Fatura[];

  ngOnInit() {
    this.page = 1;
    this.apiService.getPendingFaturas(this.page).subscribe((res) => { this.faturas = res });
  }

  nextPage(event) {
    this.apiService.getPendingFaturas(this.page + 1).subscribe((res) => {
    this.faturasBackground = res
      if (this.faturasBackground.length !== 0) {
        this.faturas = this.faturasBackground;
        this.page++;
      }
    });
  }

  prevPage(event) {
    if (this.page != 1) {
      this.apiService.getPendingFaturas(this.page - 1).subscribe((res) => {
      this.faturasBackground = res
        if (this.faturasBackground.length !== 0) {
          this.faturas = this.faturasBackground;
          this.page--;
        }
      });
    }
  }

  sortData(sort: Sort) {
    const data = this.faturas.slice();

    this.faturas = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'fornecedor': return compare(a.fornecedor, b.fornecedor, isAsc);
        case 'dataFatura': return compareDate(a.dataFatura, b.dataFatura, isAsc);
        case 'dataVencimento': return compareDate(a.dataVencimento, b.dataVencimento, isAsc);
        case 'valor': return compare(a.valor, b.valor, isAsc);
        default: return 0;
      }
    });
  }
}
  
  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
  function compareDate(a: Date, b: Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

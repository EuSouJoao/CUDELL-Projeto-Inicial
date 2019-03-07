import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Fatura } from '../fatura';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-table-mine',
  templateUrl: './table-mine.component.html',
  styleUrls: ['./table-mine.component.scss']
})

export class TableMineComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  faturas: Fatura[];

  page: number;

  faturasBackground: Fatura[];

  ngOnInit() {
    this.page = 1;
    this.apiService.getMyFaturas(this.page).subscribe((res) => {this.faturas = res});
  }

  nextPage(event) {
    this.apiService.getMyFaturas(this.page + 1).subscribe((res) => {
    this.faturasBackground = res
      if (this.faturasBackground.length !== 0) {
        this.faturas = this.faturasBackground;
        this.page++;
      }
    });
  }

  prevPage(event) {
    if (this.page != 1) {
      this.apiService.getMyFaturas(this.page - 1).subscribe((res) => {
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
        case 'estado': return compare(a.estado, b.estado, isAsc);
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

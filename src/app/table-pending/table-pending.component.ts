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
  criteria: string;
  order: string;

  constructor(private apiService: ApiService) { }

  faturas: Fatura[];

  faturasBackground: Fatura[];

  ngOnInit() {
    this.page = 1;
    this.apiService.getPendingFaturas(this.page).subscribe((res) => { this.faturas = res });
  }

  nextPage(event) {
    if (this.criteria === undefined) {
      this.apiService.getPendingFaturas(this.page + 1).subscribe((res) => {
      this.faturasBackground = res
        if (this.faturasBackground.length !== 0) {
          this.faturas = this.faturasBackground;
          this.page++;
        }
      });
   } else {
    this.apiService.getPendingFaturasCriteria(this.page + 1, this.criteria, this.order).subscribe((res) => {
      this.faturasBackground = res
        if (this.faturasBackground.length !== 0) {
          this.faturas = this.faturasBackground;
          this.page++;
        }
      });
   }
  }

  prevPage(event) {
    if (this.criteria === undefined) {
      if (this.page != 1) {
        this.apiService.getPendingFaturas(this.page - 1).subscribe((res) => {
        this.faturasBackground = res
          if (this.faturasBackground.length !== 0) {
            this.faturas = this.faturasBackground;
            this.page--;
          }
        });
      }
    } else {
      if (this.page != 1) {
        this.apiService.getPendingFaturasCriteria(this.page - 1, this.criteria, this.order).subscribe((res) => {
        this.faturasBackground = res
          if (this.faturasBackground.length !== 0) {
            this.faturas = this.faturasBackground;
            this.page--;
          }
        });
      }
    }
  }

  sortData(sort: Sort) {

    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'fornecedor':
      this.page = 1;
      if (isAsc) {
        this.apiService.getPendingFaturasCriteria(this.page, "fornecedor", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "fornecedor";
        this.order = "asc";
      } else {
        this.apiService.getPendingFaturasCriteria(this.page, "fornecedor", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "fornecedor";
        this.order = "desc";
      }
      break;
      
      case 'dataFatura': 
      this.page = 1; 
      if (isAsc) {
        this.apiService.getPendingFaturasCriteria(this.page, "datafatura", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "datafatura";
        this.order = "asc";
      } else {
        this.apiService.getPendingFaturasCriteria(this.page, "datafatura", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "datafatura";
        this.order = "desc";
      }
      break;

      case 'dataVencimento': 
      this.page = 1; 
      if (isAsc) {
        this.apiService.getPendingFaturasCriteria(this.page, "datavencimento", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "datavencimento";
        this.order = "asc";
      } else {
        this.apiService.getPendingFaturasCriteria(this.page, "datavencimento", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "datavencimento";
        this.order = "desc";
      }
      break;

      case 'valor':
      this.page = 1; 
      if (isAsc) {
        this.apiService.getPendingFaturasCriteria(this.page, "valor", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "valor";
        this.order = "asc";
      } else {
        this.apiService.getPendingFaturasCriteria(this.page, "valor", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "valor";
        this.order = "desc";
      }
      break;

      default: return 0;
    }
  }
}

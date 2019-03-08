import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Fatura } from '../fatura';
import {Sort} from '@angular/material';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-table-mine',
  templateUrl: './table-mine.component.html',
  styleUrls: ['./table-mine.component.scss']
})

export class TableMineComponent implements OnInit {

  constructor(private apiService : ApiService, private searchService : SearchService) { }

  search: string;
  
  criteria: string;

  order: string;

  faturas: Fatura[];

  page: number;

  faturasBackground: Fatura[];

  ngOnInit() {
    this.page = 1;
    this.apiService.getMyFaturas(this.page).subscribe((res) => {this.faturas = res});
    this.searchService.searchSelection.subscribe(search => this.search = search);
  }

  nextPage(event) {
    if (this.criteria === undefined) {
      this.apiService.getMyFaturas(this.page + 1).subscribe((res) => {
      this.faturasBackground = res
        if (this.faturasBackground.length !== 0) {
          this.faturas = this.faturasBackground;
          this.page++;
        }
      });
   } else {
    this.apiService.getMyFaturasCriteria(this.page + 1, this.criteria, this.order).subscribe((res) => {
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
        this.apiService.getMyFaturas(this.page - 1).subscribe((res) => {
        this.faturasBackground = res
          if (this.faturasBackground.length !== 0) {
            this.faturas = this.faturasBackground;
            this.page--;
          }
        });
      }
    } else {
      if (this.page != 1) {
        this.apiService.getMyFaturasCriteria(this.page - 1, this.criteria, this.order).subscribe((res) => {
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
        this.apiService.getMyFaturasCriteria(this.page, "fornecedor", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "fornecedor";
        this.order = "asc";
      } else {
        this.apiService.getMyFaturasCriteria(this.page, "fornecedor", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "fornecedor";
        this.order = "desc";
      }
      break;
      
      case 'dataFatura': 
      this.page = 1; 
      if (isAsc) {
        this.apiService.getMyFaturasCriteria(this.page, "datafatura", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "datafatura";
        this.order = "asc";
      } else {
        this.apiService.getMyFaturasCriteria(this.page, "datafatura", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "datafatura";
        this.order = "desc";
      }
      break;

      case 'dataVencimento': 
      this.page = 1; 
      if (isAsc) {
        this.apiService.getMyFaturasCriteria(this.page, "datavencimento", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "datavencimento";
        this.order = "asc";
      } else {
        this.apiService.getMyFaturasCriteria(this.page, "datavencimento", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "datavencimento";
        this.order = "desc";
      }
      break;

      case 'valor':
      this.page = 1; 
      if (isAsc) {
        this.apiService.getMyFaturasCriteria(this.page, "valor", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "valor";
        this.order = "asc";
      } else {
        this.apiService.getMyFaturasCriteria(this.page, "valor", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "valor";
        this.order = "desc";
      }
      break;

      case 'estado':
      this.page = 1; 
      if (isAsc) {
        this.apiService.getMyFaturasCriteria(this.page, "estado", "asc").subscribe((res) => { this.faturas = res});
        this.criteria = "valor";
        this.order = "asc";
      } else {
        this.apiService.getMyFaturasCriteria(this.page, "estado", "desc").subscribe((res) => { this.faturas = res});
        this.criteria = "valor";
        this.order = "desc";
      }
      break;

      default: return 0;
    }
  }
}
  
  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
  function compareDate(a: Date, b: Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

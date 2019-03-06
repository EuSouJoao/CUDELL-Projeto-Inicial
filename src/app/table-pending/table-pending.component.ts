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
}

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

}

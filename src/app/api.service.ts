import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fatura } from './fatura';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:2900/api'

  constructor(private httpClient: HttpClient) { }

  public getPendingFaturas(){
    return this.httpClient.get<Fatura[]>(`${this.apiURL}/faturaspendentes`);
  }

  public getMyFaturas(){
    return this.httpClient.get<Fatura[]>(`${this.apiURL}/faturas`);
  }
}

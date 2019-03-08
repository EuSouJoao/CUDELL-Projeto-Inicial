import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fatura } from './fatura';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:2900/api'

  constructor(private httpClient: HttpClient) { }

  public getPendingFaturas(page){
    return this.httpClient.get<Fatura[]>(`${this.apiURL}/faturaspendentes/${page}`, {withCredentials:true});
  }

  public getPendingFaturasCriteria(page, criteria, order){
    return this.httpClient.get<Fatura[]>(`${this.apiURL}/faturaspendentes/sort/${page}/${criteria}/${order}`, {withCredentials:true});
  }

  public getMyFaturasCriteria(page, criteria, order){
    return this.httpClient.get<Fatura[]>(`${this.apiURL}/faturas/sort/${page}/${criteria}/${order}`, {withCredentials:true});
  }

  public getMyFaturas(page){
    return this.httpClient.get<Fatura[]>(`${this.apiURL}/faturas/${page}`, {withCredentials:true});
  }

  public getUsername(){
    return this.httpClient.get<string>(`${this.apiURL}/user`, {withCredentials:true});
  }

  public getMyFaturasSearch(page, term){
    return this.httpClient.get<Fatura[]>(`${this.apiURL}/faturas/search/${page}/${term}`, {withCredentials:true});
  }

  public getPendingFaturasSearch(page, term){
    return this.httpClient.get<Fatura[]>(`${this.apiURL}/faturas/search/${page}/${term}`, {withCredentials:true});
  }
}

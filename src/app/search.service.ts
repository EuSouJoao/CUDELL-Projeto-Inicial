import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSource = new BehaviorSubject('');
  searchSelection = this.searchSource.asObservable();

  constructor() { 
  }

  changeSearch(search: string){
    this.searchSource.next(search);
  }
}

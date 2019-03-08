import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private selectionSource = new BehaviorSubject('none');
  currentSelection = this.selectionSource.asObservable();

  constructor() { 
  }

  changeSelection(selection: string){
    this.selectionSource.next(selection);
  }
}

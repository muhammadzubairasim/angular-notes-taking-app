import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dataFromSearch } from '../Interfaces/noteInterface';

@Injectable({
  providedIn: 'root', // Specify provider scope (usually 'root' for global access)
})
export class MyService {
  private seacrhQueryVar = new BehaviorSubject<dataFromSearch>({
    searchQuery: null,
    selectedOptionTag: false,
  });
  searchQueryValue = this.seacrhQueryVar.asObservable();
  updateVariable(newData: dataFromSearch) {
    this.seacrhQueryVar?.next(newData);
  }
}

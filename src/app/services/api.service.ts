import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { data } from '../model/mockDb';
import { CONNECTION_LEVEL } from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getDbData(parent = CONNECTION_LEVEL) {
    return of(data.filter(elem=>elem.parent === parent)
    )}
}

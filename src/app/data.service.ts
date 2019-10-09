import { Injectable } from '@angular/core';
import{Employee}from'./employee.modal';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  employees:Employee[] = [];
 
  constructor() { }
  create(b:Employee){
    this.employees.push(b);
    b.id = this.employees.length -1;
  }
}

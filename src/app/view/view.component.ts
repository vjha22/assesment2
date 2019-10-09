import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee} from '../employee.modal';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employees:Employee[] = [];

  constructor(private svc:DataService) { }

  ngOnInit() {
    this.employees = this.svc.employees;
  
 
  }
  rmv(i){
    this.employees.splice(i,1);
  }
}

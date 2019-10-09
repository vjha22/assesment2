import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.modal';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  employee: Employee;
  employeeId: number;
  //text:string;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.employees.forEach(element => {
      if(element.id==this.employeeId){
        this.employee=element;
      }
    });
  }

}
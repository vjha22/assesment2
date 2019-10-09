import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee.modal';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: Employee;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employee = this.svc.employees[parseInt(this.route.snapshot.paramMap.get('id'))];
  }

  editEmployee() {
    this.svc.employees[this.svc.employees.indexOf(this.employee)] = this.employee;
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
  }

}


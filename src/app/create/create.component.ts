import { Component, OnInit } from '@angular/core';
import { Employee} from '../employee.modal';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id: number = 0;
  name: string;
  address: string;
  dob: number;
  number: number;
  degree: string;
  marks: number;
  stream: string;
 college: string;


  newEmployee: Employee;

  //dependancy injection code
  constructor(private svc:DataService) { }

  ngOnInit() {
  }

  createEmployee() {
 
    this.newEmployee = new Employee(this.name, this.address, this.dob,this.number, this.degree,this.marks,this.stream,this.college);
    console.log(this.newEmployee);
    this.svc.create(this.newEmployee);
    
  }

}

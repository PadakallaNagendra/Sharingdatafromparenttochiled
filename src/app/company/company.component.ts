import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
phonenumber:string="6303155490";
companyname:string="KeyStoneEmployeeManageMent";

empname:any;
    @ViewChild(EmployeeComponent) emp:any =EmployeeComponent;
    onClickMeClicked(){
      console.log(this.emp);
      this.emp.empname="Nagendra";
    }
  constructor() { }

  ngOnInit(): void {
  }

}

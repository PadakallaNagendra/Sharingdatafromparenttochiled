import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
empname:string="bhagi";
 @Input()
  x:string="";
  constructor() {
   }

  ngOnInit(): void {
  }

}

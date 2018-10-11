import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/';
import { Employee } from './interfaces/employee.interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    empList: Employee[];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.getEmployeeList();
    }

    getEmployeeList() {
        this.employeeService.getEmployeeList().subscribe(data => {
            this.empList = data;
        });
    }
}

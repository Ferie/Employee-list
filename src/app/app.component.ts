import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/';
import { Employee } from './interfaces/employee.interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public empList: Employee[];

    constructor(private employeeService: EmployeeService) {}

    public ngOnInit() {
        this.getEmployeeList();
    }

    public getEmployeeList() {
        this.employeeService.getEmployeeList().subscribe(data => {
            this.empList = data;
        });
    }
}

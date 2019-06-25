import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services';
import { Employee } from '../../interfaces';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
    public employeeDetail: Employee;

    constructor(private employeeService: EmployeeService) {}

    public ngOnInit() {
        this.employeeService.empDetailSubject$.subscribe(data => {
            this.employeeDetail = data
        });
    }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../interfaces/employee.interfaces';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent implements OnInit {
    public employeeDetail: Employee;

    constructor(private employeeService: EmployeeService) {}

    public ngOnInit() {
        this.employeeService.empDetailSubject$.subscribe(data => {
            this.employeeDetail = data;
        });
    }
}

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../../interfaces/employee.interfaces';
import { EmployeeService } from '../../services/employee';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
    @Input() public empListData: Employee[];

    constructor(private employeeService: EmployeeService) {}

    public showEmployeeDetails(id: number) {
        this.employeeService.getEmployeeDetails(id);
    }
}

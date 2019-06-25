import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../interfaces';
import { EmployeeService } from '../../services';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
    @Input() public empListData: Employee[];

    constructor(private employeeService: EmployeeService) {}

    public showEmployeeDetails(id: number) {
        this.employeeService.getEmployeeDetails(id);
    }
}

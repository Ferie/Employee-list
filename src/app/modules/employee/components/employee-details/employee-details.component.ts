import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../interfaces/employee.interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
    public employeeDetail: Employee;
    private unsubscribe$ = new Subject<void>();

    constructor(private employeeService: EmployeeService) {}

    public ngOnInit(): void {
        this.employeeService.empDetailSubject$.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe(employee => this.employeeDetail = employee);
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}

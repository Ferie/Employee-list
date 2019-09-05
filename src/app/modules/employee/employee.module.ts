import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesPageComponent } from './pages/employees-page';
import {
    EmployeeListComponent,
    EmployeeDetailsComponent
} from './components';

@NgModule({
    declarations: [
        EmployeesPageComponent,
        EmployeeListComponent,
        EmployeeDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        EmployeeRoutingModule
    ]
})
export class EmployeeModule { }

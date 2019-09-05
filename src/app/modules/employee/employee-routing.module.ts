import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesPageComponent } from './pages/employees-page';
import {
    EmployeeListComponent,
    EmployeeDetailsComponent
} from './components';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'employee-portal',
        pathMatch: 'prefix'
    },
    {
        path: 'employee-portal',
        component: EmployeesPageComponent,
        children: [
            {
                path: 'list',
                component: EmployeeListComponent,
                children: [
                    {
                        path: 'details',
                        component: EmployeeDetailsComponent
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'employee-portal'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

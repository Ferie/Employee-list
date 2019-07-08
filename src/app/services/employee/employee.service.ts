import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EmployeeService {
    public get empDetailSubject$() {
        return this._empDetailSubject$;
    }
    private _empDetailSubject$ = new BehaviorSubject(null);
    private apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = 'assets/data/';
    }

    public getEmployeeList() {
        return this.http.get<Employee[]>(this.apiURL + 'emplyees.json');
    }

    public getEmployeeDetails(id: number) {
        const data = this.http.get<Employee>(this.apiURL + 'emplyee.' + id + '.json');
        this._empDetailSubject$.next(data);
    }
}

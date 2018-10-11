import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../../interfaces";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class EmployeeService {
    private apiURL: string;
    private empDetailSubject = new BehaviorSubject(null);

    constructor(private http: HttpClient) {
        this.apiURL = 'assets/data/';
    }

    getEmployeeList() {
        return this.http.get<Employee[]>(this.apiURL + 'emplyees.json');
    }

    sendEmployeeDetail(id: number) {
        let data = this.http.get<Employee>(this.apiURL + 'emplyee.' + id + '.json');
        this.empDetailSubject.next(data);
    }

    getEmployeeDetail() {
        return this.empDetailSubject.asObservable();
    }
}

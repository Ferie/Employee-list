import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
    EmployeeListComponent,
    EmployeeDetailsComponent
} from './components';
import { EmployeeService } from './services/';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeDetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }

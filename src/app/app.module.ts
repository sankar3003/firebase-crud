import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ProductFormComponent,
    UserComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

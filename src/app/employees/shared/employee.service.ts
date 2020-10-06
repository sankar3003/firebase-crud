import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) {}

  getData() {
    this.employeeList = this.firebase.list('employee');
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      phone: employee.phone,
      address: employee.address,
      email: employee.email,
      location: employee.location,

    });
  }

  updateEmployee(employee: Employee) {
    this.employeeList.update(employee.$key, {
      name: employee.name,
      phone: employee.phone,
      address: employee.address,
      email: employee.email,
      location: employee.location,
    });
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }
}

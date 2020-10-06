import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  constructor(
    public employeeService: EmployeeService,
    public toastr: ToastrService,

  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if(!employeeForm.valid){
     this.toastr.info("Please fill all * fields" ,"Required")
    }
    if (employeeForm.value.$key == null && employeeForm.valid) {
      this.employeeService.insertEmployee(employeeForm.value);
      this.resetForm(employeeForm);
      this.toastr.success('Success', 'Inserted');
    } else {
      this.employeeService.updateEmployee(employeeForm.value);
      this.resetForm(employeeForm);
      this.toastr.success('Success', 'updated');
    }
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
  phone:'',
  email:'',
  address:'',
  location:''
    };
  }






}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {


  addUser: FormGroup
  constructor(
    private fb: FormBuilder
  ) {

    this.createForm()
  }

  createForm() {
    this.addUser = this.fb.group({
      name: [null],
      uaddress: this.fb.array([
        this.fb.group({
          address: [null],
          city: [null],
          pincode: [null],
          state: [null],
          country: [null],
        })
      ])

    })
  }

  get userAddress() {
    return this.addUser.get('uaddress') as FormArray
  }

  addAddress() {
    this.userAddress.push(this.fb.group({
      address: [null],
      city: [null],
      pincode: [null],
      state: [null],
      country: [null],
    }))
  }

  deleteAddress(index) {
    this.userAddress.removeAt(index)
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.addUser.value)
  }
}

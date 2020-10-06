import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  form: FormGroup
  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      persons: this.fb.array([this.fb.group({ name: null })])
    })


  }
  get person() {
    return this.form.get('persons') as FormArray
  }
  ngOnInit() {

  }

  add() {
    this.person.push(this.fb.group({ name: null }))
  }
  submit() {
    console.log(this.form.value)
  }
}

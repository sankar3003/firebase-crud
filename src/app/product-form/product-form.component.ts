
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, AfterViewInit {

  _url = "https://jsonplaceholder.typicode.com/todos"
  data: any[] = [];
  i: any = 0;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }
  productForm: FormGroup;

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: [null, Validators.required],
      selling_points: this.fb.array([this.fb.group({ point: null, value: null })])
    })
    this.getData()
  }
  ngAfterViewInit() {
    // this.getData()
  }
  get sellingPoints(): any {
    return this.productForm.get('selling_points') as FormArray;
  }
  addSellingPoint() {
    this.sellingPoints.push(this.fb.group({ point: null, value: null }));
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);

  }

  getValidity(i) {
    return (<FormArray>this.productForm.get('selling_points')).controls[i].invalid;
  }

  getData() {

    let i = 0;

    this.http.get(this._url).subscribe(res => {
      console.log(res);
      if (res) {
        this.data = res as [];
        this.data.forEach(r => {
          this.sellingPoints.controls.forEach(element => {
            element.value.point = r.title
            //this.addSellingPoint();
          });

        });

      }
    })
  }

}

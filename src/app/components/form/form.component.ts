import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  get additionalEmails() {
    return this.form.get('additionalEmails') as FormArray;
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      areaCode: new FormControl(),
      phoneNumber: new FormControl(),
      company: new FormControl(),
      streetAddress: new FormControl(),
      streetAddress2: new FormControl(),
      city: new FormControl(),
      stateProvince: new FormControl(),
      postalZipCode: new FormControl(),
      email: new FormControl(null, Validators.email),
      additionalEmails: new FormArray([])
    });
  }

  addEmail() {
    this.additionalEmails.push(new FormControl());
  }

  deleteEmail(index: number) {
    this.additionalEmails.removeAt(index);
  }

  onSubmit(userForm: any) {
    console.log(userForm);
    // {{ formResults | json }}
  }

  // reset() {
  //   // this.form.resetForm();
  // }

}

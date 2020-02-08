import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { UserForm } from '../../models/user-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  formResults: UserForm;

  countries = [
    'Ukraine',
    'Russia',
    'USA'
  ];

  get emailAddresses() {
    return this.form.get('emailAddresses') as FormArray;
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      areaCode: new FormControl(),
      phoneNumber: new FormControl(),
      emailAddresses: new FormArray([
        // new FormControl(null, Validators.email)
      ]),
      company: new FormControl(),
      streetAddress: new FormControl(),
      streetAddress2: new FormControl(),
      city: new FormControl(),
      stateProvince: new FormControl(),
      postalZipCode: new FormControl(),
      // email: new FormControl(null, Validators.email),
      // additionalEmails: new FormArray([]),
      country: new FormControl(this.countries[0])
    });
  }

  addEmail() {
    this.emailAddresses.push(new FormControl(null, Validators.email));
  }

  deleteEmail(index: number) {
    this.emailAddresses.removeAt(index);
  }

  onSubmit(userForm: UserForm) {
    console.log(userForm);
    this.formResults = userForm;
    // {{ formResults | json }}
  }

  // reset() {
  //   // this.form.resetForm();
  // }

}

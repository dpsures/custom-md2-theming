import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.css']
})
export class RequestAccessComponent implements OnInit {

  grantAccessForm: FormGroup;

  constructor(private _form_builder: FormBuilder) {
    this.grantAccessForm = _form_builder.group({
      'requestId': [null, Validators.required],
      'requestorName': [null, Validators.required],
      'requestorEmail': [null, Validators.required],
      'tokenId': [null, Validators.required],
      'studyId': [null, Validators.required],
      'expiryDays': [null, Validators.required],
      'sharepointRequestUrl': [null, Validators.required],
      'fromDate': [null, Validators.required],
      'toDate': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm(formObject) {
    console.log(formObject.requestId);
  }

  resetForm() {
    console.log('reset form called');
    this.grantAccessForm.reset();
  }

}
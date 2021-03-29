import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss'],
})
export class ContactHomeComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.messageForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    Swal.fire({
      title: 'Success!',
      text: 'Form submitted succesfully.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    });
    this.messageForm.reset();
  }
}

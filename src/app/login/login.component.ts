import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'tudu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm = this.formBuilder.group({
  //   email: "",
  //   password:""
  // })
  constructor() { }

  // onSubmit(): void {
  //   console.warn('Your order has been submitted', this.loginForm.value);
  //   this.loginForm.reset();
  // }
  ngOnInit(): void {
  }

}

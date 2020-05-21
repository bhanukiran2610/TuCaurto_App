import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './confirm-equal-validator';

const baseUrl = 'http://localhost:8080/user/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  user = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  };
  submitted = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: [null, Validators.required],
        username: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        contactNumber: [
          null,
          [Validators.required, Validators.pattern('[1-9]{1}[0-9]{9}')],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  saveUser() {
    const data = {
      name: this.user.name,
      username: this.user.username,
      password: this.user.password,
      contactNumber: this.user.contactNumber,
    };

    this.httpClient.post(baseUrl, data, { responseType: 'text' }).subscribe(
      (response) => {
        console.log(response);
        if (response === 'Username already Taken!') {
          alert('username already taken!! Try again.');
          this.submitted = false;
        } else {
          this.submitted = true;
          alert('user created!!');
        }
      },
      (error) => {
        console.log(error);
        alert(error);
      }
    );
    this.router.navigate(['login']);
  }
}

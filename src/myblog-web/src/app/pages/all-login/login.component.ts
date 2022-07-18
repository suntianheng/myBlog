import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../all-common/authservice/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {

      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.http.post('auth/login',
        { username: username, password: password })
        .subscribe((data: any) => {
          this.auth.setAuthorizationToken('access_token', data.access_token);
          this.router.navigateByUrl('layout');
        });

    } else {

    }
  }

}

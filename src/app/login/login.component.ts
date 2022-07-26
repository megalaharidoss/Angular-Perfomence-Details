import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  public loading = false;
  public passwordTextType!: boolean;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  get f() {
    return this.loginForm.controls
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;

  }
  onsubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe(res => {
      localStorage.setItem('token', res.data.jwt);
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      this.router.navigate(['/directive'])
    
    })

  }

}

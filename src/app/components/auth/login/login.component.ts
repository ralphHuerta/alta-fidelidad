import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  createdForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 6000,
    });
  }
  submit() {
    if (
      this.createdForm.get('email').value == 'prueba@email.com' &&
      this.createdForm.get('password').value == 'pas123.'
    ) {
      this.router.navigate(['/passwordRecovery/code-verification/1']);
    } else {
      this.openSnackBar('Correo y/o contraseña incorretos');
    }
  }
}

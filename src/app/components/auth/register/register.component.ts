import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  createdForm: FormGroup | any;
  passPattern = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$';
  password = new FormControl();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        curp: ['', [Validators.required]],
        rfc: ['', [Validators.required]],
        data: ['', [Validators.required]],
        password: [
          '',
          [Validators.required, Validators.pattern(this.passPattern)],
        ],
        confirmPassword: [
          '',
          [Validators.required, Validators.pattern(this.passPattern)],
        ],
      },
      {
        validator: this.checkPasswords,
      }
    );
  }

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  };

  submit() {}
}

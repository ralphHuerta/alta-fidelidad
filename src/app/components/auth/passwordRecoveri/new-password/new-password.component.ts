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
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
})
export class NewPasswordComponent implements OnInit {
  passPattern = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@.$%^&*-]).{6,}$';
  createdForm: FormGroup | any;
  passwordValid = false;
  hide = true;
  hideVerification = true;
  message = '';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(this.passPattern),
        ]),
        passwordVerification: new FormControl('', [
        
        ]),
      },
      {
        validator: this.checkPasswords,
      },
    );
  }

  
  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordVerification')?.value;
    return pass.value === confirmPass.value ? null : { 'noSonIguales': true };
  };

  checarSiSonIguales(): boolean {

    console.log(this.createdForm.hasError('noSonIguales') &&
    this.createdForm.get('password').dirty &&
    this.createdForm.get('passwordVerification').dirty)
    return this.createdForm.hasError('noSonIguales') &&
      this.createdForm.get('password').dirty &&
      this.createdForm.get('passwordVerification').dirty;
      
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.css']
})
export class CodeVerificationComponent implements OnInit {
  title: string =''
  code: any 
  id:any
  constructor( private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUrl()
  }
  getUrl(){
    var actual = window.location+'';
    var split = actual.split("/");
    this.id = split[split.length-1];
    if(this.id !== 'code-verification' ){
      this.title= "Ingresa tu codigo de verificacion"
    }else{
      this.title= "Ingresa un codigo  el cual te permitira entrar a tu cuenta"
    }
  }

  existingAccount(){
    this.title= "Ingresa tu codigo de verificacion"
    this.router.navigate(['/home']);
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 6000,
    });
  }
  send(){
    if(this.id && this.code === 223344){
      this.router.navigate(['/home']);
    }
    if(this.code != 223344){
      this.openSnackBar('Codigo incorreto');
    }
  }

}

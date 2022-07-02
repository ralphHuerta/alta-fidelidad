import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-account',
  templateUrl: './check-account.component.html',
  styleUrls: ['./check-account.component.css']
})
export class CheckAccountComponent implements OnInit {
  title= "Ingresa el codigo que te hemos enviado a tu correo"
  code:any
  constructor() { }

  ngOnInit(): void {
  }

}

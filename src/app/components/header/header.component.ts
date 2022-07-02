import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  lee = [
    { value: 'Credenciales de la aplicacio' },
    { value: 'Email: prueba@email.com' },
    { value: 'Password:pas123.' },
    { value: 'Codigo de verificación:223344' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-point-of-sale',
  templateUrl: './point-of-sale.component.html',
  styleUrls: ['./point-of-sale.component.css']
})
export class PointOfSaleComponent implements OnInit {
  createdForm: FormGroup | any;
  dates = new Date();
  actualDate= this.dates.getFullYear()
  selectedValue=this.actualDate;
  amount:any;
  yeards = [
    {value: this.actualDate},
    {value: this.actualDate+1},
    {value: this.actualDate+2},
    {value: this.actualDate+3},
    {value: this.actualDate+4},
  ];

  month=[
    {value: 'Enero'},
    {value: 'Febrero'},
    {value: 'Marzo'},
    {value: 'Abril'},
    {value: 'Mayo'},
    {value: 'Junio'},
    {value: 'Julio'},
    {value: 'Agosto'},
    {value: 'Septiembre'},
    {value: 'Octubre'},
    {value: 'Noviembre'},
    {value: 'Diciembre'},
  ]


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group({
      check: ['', [Validators.required]],
      years: ['', [Validators.required]],
      month: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      codePostal: ['', [Validators.required]],
    })
  }

}

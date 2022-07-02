import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/interface/movents';
import { MoventsCheck } from 'src/app/interface/movents';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
const Movements: MoventsCheck[] = [
  {
    id: '1',
    dataCreate: '12 julio 2022',
    amount: '3000',
    operationNumber: '12345fgdbgbf',
    name: 'Juan Perez Hernandez',
    rfc: 'PEHJ120890',
  },
  {
    id: '2',
    dataCreate: '11 julio 2022',
    amount: '300',
    operationNumber: '67895fgdbgbf',
    name: 'Antonio Perez Hernandez',
    rfc: 'AEHJ120890',
  },
  {
    id: '3',
    dataCreate: '11 julio 2022',
    amount: '200',
    operationNumber: '44675fgdbgbf',
    name: 'Gabriel Perez Hernandez',
    rfc: 'GEHJ120890',
  },
  {
    id: '4',
    dataCreate: '10 julio 2022',
    amount: '100',
    operationNumber: '454657fgdbgbf',
    name: 'Ana Perez Hernandez',
    rfc: 'AEHJ120890',
  },
  {
    id: '5',
    dataCreate: '8 julio 2022',
    amount: '150',
    operationNumber: ' 57688fgdbgbf',
    name: 'Luisa Perez Hernandez',
    rfc: 'LEHJ120890',
  },
  {
    id: '6',
    dataCreate: '7 julio 2022',
    amount: '8000',
    operationNumber: '56767fgdbgbf',
    name: 'Guadalupe Perez Hernandez',
    rfc: 'GEHJ120890',
  },
  {
    id: '7',
    dataCreate: '2 julio 2022',
    amount: '9500',
    operationNumber: '56466fgdbgbf',
    name: 'Oracio Perez Hernandez',
    rfc: 'OEHJ120890',
  },
  {
    id: '8',
    dataCreate: '1 julio 2022',
    amount: '10000',
    operationNumber: '59684fgdbgbf',
    name: 'Eduardo Perez Hernandez',
    rfc: 'EEHJ120890',
  },
  {
    id: '9',
    dataCreate: '29 junio 2022',
    amount: '2000',
    operationNumber: '98765fgdbgbf',
    name: 'Emmanuel Perez Hernandez',
    rfc: 'EEHJ120890',
  },
];
@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css'],
})
export class MovementsComponent implements OnInit {
  displayedColumns: string[] = [
    'data',
    'amount',
    'invoice',
    'name',
    'rfc',
    'refundPayment',
    'resend',
  ];
  dataSource = Movements;
  constructor() {}

  ngOnInit(): void {}
}

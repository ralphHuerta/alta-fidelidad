import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successful-transactions',
  templateUrl: './successful-transactions.component.html',
  styleUrls: ['./successful-transactions.component.css'],
})
export class SuccessfulTransactionsComponent implements OnInit {
  send = false;
  constructor() {}

  ngOnInit(): void {}
  sen() {
    this.send = true;
  }
}

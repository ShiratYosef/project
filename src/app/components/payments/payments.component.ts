import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/modules/Child';
import { Payment } from 'src/app/modules/Payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
children :Child[];
startDate = new Date();
  constructor() { }
payment:Payment;
types:string[]=["אשראי","מזומן","צ'ק"]
  ngOnInit() {
  }

}

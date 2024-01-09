// payment.component.ts

import { Component, OnInit } from '@angular/core';
import { RazorpayService } from 'src/app/services/razorpay.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'] 
})
export class PaymentComponent implements OnInit {

  totalAmount: number = 500; 
  razorpayOptions: any = {}; 

  constructor(private razorpayService: RazorpayService) { }

  ngOnInit(): void {
   
  }
  initiatePayment(): void {
    this.razorpayService.createOrder(this.totalAmount);
    
  }

 

  openRazorpay() {
    // Open Razorpay payment form
  //  const razorpay = new this.razorpayService.Razorpay(this.razorpayOptions);
    //razorpay.open();
  }

  completePayment() {
    // Implement any additional logic needed after successful payment
  }
}

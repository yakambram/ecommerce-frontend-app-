// payment.component.ts

import { Component, OnInit } from '@angular/core';
import { RazorpayService } from 'src/app/services/razorpay.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'] // Verify this path
})
export class PaymentComponent implements OnInit {

  totalAmount: number = 1000; // Replace with your actual total amount
  razorpayOptions: any = {}; // Customize Razorpay options as needed

  constructor(private razorpayService: RazorpayService) { }

  ngOnInit(): void {
   
  }
  initiatePayment(): void {
    this.razorpayService.createOrder(this.totalAmount)
    .then(order => {
      this.razorpayService.openPaymentModal(order);
    })
    .catch(error => {
      console.error('Error creating Razorpay order:', error);
    });
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

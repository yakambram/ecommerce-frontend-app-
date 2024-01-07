// razorpay.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  private razorpayScriptLoaded: boolean = false;

  // Function to load Razorpay script dynamically
  private loadRazorpayScript(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.razorpayScriptLoaded) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          this.razorpayScriptLoaded = true;
          resolve();
        };
        document.head.appendChild(script);
      } else {
        resolve();
      }
    });
  }

  // Create Razorpay order
  createOrder(amount: number): Promise<any> {
    // Replace this with your server-side logic to create an order on the server
    // You'll need to make an API call to your server to generate the order and get the order details
    // For example, you can use Angular's HttpClient to make a request to your server
    return new Promise<any>((resolve, reject) => {
      // Simulate server response (replace with actual server API call)
      const order: any = {
        id: 'order_id_from_server'+Date.now(),
        amount: amount * 100, // Convert amount to paise
        currency: 'INR'
        // Add more order details as needed
      };

      resolve(order);
    });
  }

  // Open Razorpay payment modal
  async openPaymentModal(order: any): Promise<void> {
    await this.loadRazorpayScript();

    const options = {
      key: 'rzp_test_4lw80NvYa0WUy3', // Replace with your actual Razorpay API key
      amount: order.amount,
      order_id: order.id,
      name: 'Saharsh Code Craft Labs',
      description: 'Payment for Products',
      image: 'assets/your-logo.png', // Replace with your logo image path
      handler: (response: any) => {
        console.log(response);
        // Handle payment success or failure here
      },
      prefill: {
        name: 'yakambram',
        email: 'yakambram.kommu@gmail.com',
        contact: '9676222172'
      },
      theme: {
        color: '#3366FF'
      }
    };

    const razorpay: any = new (window as any).Razorpay(options);
    razorpay.open();
  }
}

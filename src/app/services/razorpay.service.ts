import { HostListener, Injectable } from '@angular/core';
import { OrderService } from './order.service';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  form: any = 
    {   name:'Yakambram',
        meail:'Yakambram.kommu@gmail.com',
        phoneNumber:'9676222172',
        amount:10
}; 
	paymentId: string;
	error: string;
  
	constructor(private orderService: OrderService) {

	}

	options = {
	key: "rzp_test_4lw80NvYa0WUy3",
	amount: "10", 
	name: "Yakambram Kommi",
	description: "Web Development",
	image: "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
	order_id:"",
	handler: function (response){
		var event = new CustomEvent("payment.success", 
			{
				detail: response,
				bubbles: true,
				cancelable: true
			}
		);	  
		window.dispatchEvent(event);
	}
	,
	prefill: {
	 name: "Yakambram",
	 email: "yakambram.kommu@gmail.com",
	 contact: "9676222172"
	},
	notes: {
	address: "Manikonda"
	},
	theme: {
	 color: "#3399cc"
	}
	};

	createOrder(totalAmount:any): void {
    let order = {
      name:'Yakambram',
      meail:'Yakambram.kommu@gmail.com',
      phoneNumber:'9676222172',
      amount:totalAmount

    }
      
		this.paymentId = ''; 
		this.error = ''; 
		this.orderService.createOrder(order).subscribe(
		data => {
			this.options.key = data.secretKey;
			this.options.order_id = data.razorpayOrderId;
			this.options.amount = data.applicationFee; //paise
			this.options.prefill.name = this.form.name;
			this.options.prefill.email = this.form.email;
			this.options.prefill.contact = this.form.phone;
			var rzp1 = new Razorpay(this.options);
			rzp1.open();
				      
			rzp1.on('payment.failed', function (response){    
				// Todo - store this information in the server
				console.log(response.error.code);    
				console.log(response.error.description);    
				console.log(response.error.source);    
				console.log(response.error.step);    
				console.log(response.error.reason);    
				console.log(response.error.metadata.order_id);    
				console.log(response.error.metadata.payment_id);
				this.error = response.error.reason;
			}
			);
		}
		,
		err => {
			this.error = err.error.message;
		}
		);
	}

	@HostListener('window:payment.success', ['$event']) 
	onPaymentSuccess(event): void {
		this.orderService.updateOrder(event.detail).subscribe(
		data => {
			this.paymentId = data.message;
		}
		,
		err => {
			this.error = err.error.message;
		}
		);
	}
}

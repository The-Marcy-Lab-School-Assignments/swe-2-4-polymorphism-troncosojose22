/* eslint-disable max-classes-per-file */

class Payment {
  status = 'pending';

  constructor(amount, recipient) {
    this.amount = amount;
    this.recipient = recipient;
  }

  process() {
    this.status = 'completed';
    return `Payment of $${this.amount} to ${this.recipient} completed`
  }

  getDetails() {
    return `$${this.amount} to ${this.recipient} - Status: ${this.status}`
  }
}

class CreditCardPayment extends Payment { 
  constructor(amount, recipient, cardNumber) {
    super(amount, recipient);
    this.cardNumber = cardNumber;
  }

  process() {
    this.status = 'completed';
    return `${super.process()} via Credit Card ****${this.cardNumber.slice(15)}`;
  }

  getDetails() {
    return `${super.getDetails()} (Card: ****${this.cardNumber.slice(15)})`;
  }
}

class PayPalPayment extends Payment {
  constructor(amount, recipient, email) {
    super(amount, recipient);
    this.email = email;
  }

  process() {
    this.status = 'completed';
    return `${super.process()} via PayPal (${this.email})`;
  }
  
  getDetails() {
    return `${super.getDetails()} (PayPal: ${this.email})`;
  }
}
const processPayments = (payments) => {
  let totalAmount = 0;
  payments.forEach((payment) => {
    console.log(payment.getDetails());
    console.log(payment.process());
    totalAmount += payment.amount;
  })

  return totalAmount;
};

module.exports = {
  Payment,
  CreditCardPayment,
  PayPalPayment,
  processPayments,
};

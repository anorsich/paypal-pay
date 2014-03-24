Minimalist 'send money to email' - using the Paypal API
--
[![Build Status](https://travis-ci.org/ogt/paypal-pay.png)](https://travis-ci.org/ogt/paypal-pay)

## Description
```
var pay = require('paypal-pay')({
{
      //required parameters
      'userId': '',
      'password': '',
      'signature' : '',

      //optional parameters and their defaults
      'sandbox': true,
      'feesPayer': 'SENDER',
      'currencyCode': 'USD',
});

pay('john@doe.com', 18.00, "This is an example memo', function(err, response){
    if(err){
        //handle error here
        return;
    }

    //redirect user to response.paymentApprovalUrl in order to approve payment
});

```
The module is a simple wrapper on top of the (paypal-adaptive-sdk-nodejs)[https://github.com/Ideame/paypal-adaptive-sdk-nodejs] module
By default sender pays all fees.

## Installation 

Installing the module
```
npm install paypal-pay
```



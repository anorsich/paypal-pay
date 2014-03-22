Minimalist 'send money to email' - using the Paypal API
--
[![Build Status](https://travis-ci.org/ogt/paypal-pay.png)](https://travis-ci.org/ogt/paypal-pay)

## Description
```
var pay = require('paypal-pay')({
{
      'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
      'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM',
      'sandbox' : false  // defaults to true
});

pay('joe@doe.com',18.00,'USD',"This is an example memo', function(err,response){
    // ...
});

```
The module is a simple wrapper on top of the paypal-rest-sdk module
It assumes that the sender pays all fees,

## Installation 

Installing the module
```
npm install paypal-pay
```

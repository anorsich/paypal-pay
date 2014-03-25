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

      //make sure that senderEmail and above credentials are from the same paypal account
      //otherwise paypal won't compete payment automatically
      'senderEmail' : '',

      //optional parameters and their defaults
      'sandbox': true,
      'feesPayer': 'SENDER',
      'currencyCode': 'USD',
});

pay('john@doe.com', 18.00, "This is an example memo', function(err, response){
    if(err){
        //response.error -- will contains errors if something went wrong
        //see response examples below for more details

        return;
    }
});

```
The module is a simple wrapper on top of the [paypal-adaptive-sdk-nodejs](https://github.com/Ideame/paypal-adaptive-sdk-nodejs) module
By default sender pays all fees.

## Installation 

Installing the module
```
npm install paypal-pay

```

## Notes:

[Paypal adaptive payments api documentation.](https://developer.paypal.com/docs/classic/api/adaptive-payments/Pay_API_Operation/)


### How to get started?

1. Check your account status. Login to PayPal. Go to your PayPal Profile and click My settings. Confirm that your Account type is either Premier or Business, or upgrade your account.
2. Check your API settings. Click My selling tools. Expand Selling online if needed and check API access. Click Update and Add or edit API permission or View API signature.
3. Test your integration using the PayPal Sandbox, as described in Testing Classic API Calls. All Adaptive API calls in the Sandbox must have the following standard value as the App ID:
APP-80W284485P519543T
4. To go live with your application, follow the submission steps outlined in Going Live with Your Application. When you submit your application to PayPal for review, the application is quickly scanned for the requests to PayPal operations. If no "advanced" operations are found, PayPal issues an App ID for the production servers at the time you submit the application. If your application uses "advanced" PayPal operations, or if your application implements a complex business model, you can expect the review to take approximately 10 – 15 days.

More information can be found in Paypal [adaptive payments documentation](https://developer.paypal.com/docs/classic/products/adaptive-payments/)

### Response examples:

Success:

``` javascript
{
   "responseEnvelope":{
      "timestamp":"2014-03-25T00:03:02.486-07:00",
      "ack":"Success",
      "correlationId":"30eb8c99e2200",
      "build":"10175386"
   },
   "payKey":"AP-5RW588649M220974T",
   "paymentExecStatus":"COMPLETED",
   "paymentInfoList":{
      "paymentInfo":[
         {
            "transactionId":"4DB51146SF913544T",
            "transactionStatus":"COMPLETED",
            "receiver":{
               "amount":"10.00",
               "email":"paypal-pay-receiver@sandbox-mail.com",
               "primary":"false",
               "accountId":"MY2AP9Y85VAD6"
            },
            "pendingRefund":"false",
            "senderTransactionId":"9TA40881PA968474G",
            "senderTransactionStatus":"COMPLETED"
         }
      ]
   },
   "sender":{
      "accountId":"S46RUQD499YWJ"
   },
   "httpStatusCode":200
}
```


Error:

``` javascript
{
   "responseEnvelope":{
      "timestamp":"2014-03-24T23:49:22.419-07:00",
      "ack":"Failure",
      "correlationId":"6db128a52e68c",
      "build":"10175386"
   },
   "error":[
      {
         "errorId":"589039",
         "domain":"PLATFORM",
         "subdomain":"Application",
         "severity":"Error",
         "category":"Application",
         "message":"The email address not-exists@not-exists.com is invalid. It may not be registered in PayPal's system yet",
         "parameter":[
            "not-exists@not-exists.com",
            "Sender Account not found"
         ]
      }
   ],
   "httpStatusCode":200
}

```




//https://developer.paypal.com/docs/classic/api/adaptive-payments/Pay_API_Operation/
var PaypalAdaptive = require('paypal-adaptive');


var options, paypalSdk;
module.exports = function(config) {
    if (!config) throw new Error('Config is required');
    if (!config.userId) throw new Error('Config must have userId');
    if (!config.password) throw new Error('Config must have password');
    if (!config.signature) throw new Error('Config must have signature');
    if (!config.senderEmail) throw new Error('Config must have senderEmail');

    config.sandbox = config.sandbox || true;
    config.feesPayer = config.feesPayer || "SENDER";
    config.currencyCode = config.currencyCode || "USD";
    options = config;

    paypalSdk = new PaypalAdaptive({
        userId:    config.userId,
        password:  config.password,
        signature: config.signature,
        sandbox:   config.sandbox
    });

    return pay;
};

var pay = function(payToEmail, amount, memo, callback){
    var payload = {
        requestEnvelope: {
            errorLanguage:  'en_US'
        },
        actionType:     'PAY',
        currencyCode:   options.currencyCode,
        feesPayer:      options.feesPayer,
        memo:           memo,
        //cancelUrl/returnUrl always required but only used for payments that require approval (explicit payments).
        cancelUrl:      "http://not-used-but-required.com",
        returnUrl:       "http://not-used-but-required.com",
        senderEmail:    options.senderEmail,
        receiverList: {
            receiver: [
                {
                    email:  payToEmail,
                    amount: amount
                }
            ]
        }
    };

    paypalSdk.pay(payload, function (err, response) {
        callback(err, response);
    });
};
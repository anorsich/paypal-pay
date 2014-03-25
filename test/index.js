var assert = require("assert");

var pay;

describe('Paypal Pay', function () {
    it('throws error during initialization when either config itself, userId, password or signature is missing', function(done){
        assert.throws(
            function() {
                pay = require("./../lib/index")();
            }
        );

        assert.throws(
            function() {
                pay = require("./../lib/index")({password: "", senderEmail: "", signature: ""});
            }
        );

        assert.throws(
            function() {
                pay = require("./../lib/index")({userId: "", senderEmail: "", signature: ""});
            }
        );

        assert.throws(
            function() {
                pay = require("./../lib/index")({userId: "", senderEmail: "", password: ""});
            }
        );

        assert.throws(
            function() {
                pay = require("./../lib/index")({userId: "", signature: "", password: ""});
            }
        );

        done();
    });

    pay = require("./../lib/index")({
        userId: "paypal-pay_api1.paypal-sandbox.com",
        password: "1395729654",
        signature: "AsHqyglTRtUb0nM8zhWHTMzq26dWANcKuaiC.LHyJfG0zohPOgJ5F5Ks",
        senderEmail: "paypal-pay@paypal-sandbox.com"
    });

    it('pay and verify that payment completed', function(done){
        pay("paypal-pay-receiver@sandbox-mail.com", 10.00, "This is test payment", function(err, response){
            assert.ifError(err);

            assert.equal(response.responseEnvelope.ack, "Success");

            assert.equal(response.httpStatusCode, 200);

            assert.equal(response.paymentExecStatus, "COMPLETED");

            done();
        });
    });

});

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
                pay = require("./../lib/index")({password: "", signature: ""});
            }
        );

        assert.throws(
            function() {
                pay = require("./../lib/index")({userId: "", signature: ""});
            }
        );

        assert.throws(
            function() {
                pay = require("./../lib/index")({userId: "", password: ""});
            }
        );

        done();
    });

    pay = require("./../lib/index")({
        userId: "andrew_api1.paralect.com",
        password: "1391019821",
        signature: "A9b5X.hdwfxbObBKlebSFyR.AVVPAzmOPLIkeXwI9V60HxtmO2-B6EDY"
    });

    it('pay and verify that payment was created on paypal', function(done){
        pay("andrew@paralect.com", 10.00, "This is test payment", function(err, response){
            assert.ifError(err);

            assert.equal(response.responseEnvelope.ack, "Success");

            assert.equal(response.httpStatusCode, 200);

            console.log("\nPaypal response sample:\n");
            console.log(response);

            pay.getPaymentDetails(response.payKey, function(err, response){
                assert.ifError(err);

                assert.equal(response.status, "CREATED");

                assert.equal(response.responseEnvelope.ack, "Success");

                assert.equal(response.httpStatusCode, 200);

                done();
            });
        });
    });

});

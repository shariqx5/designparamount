
    var stripe = Stripe('<?php echo $this->config->item('stripe_publishable_key'); ?>');

    var elements = stripe.elements();
    var cardElement = elements.create('card');
    cardElement.mount('#card-element');

    var cardButton = document.getElementById('card-button');
    
    cardButton.addEventListener('click', function(ev) {
        ev.preventDefault();
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var companyName = document.getElementById('companyName').value;
        var country = document.getElementById('country').value;
        var statename = document.getElementById('statename').value;
        var city = document.getElementById('city').value;
        var zip = document.getElementById('zip').value;
        
        if(firstName !== "" && lastName !== "" && email !== "" && phone !== "" && address !== "" && companyName !== "" && country !== "" && statename !== "" &&city !== "" && zip !== "" ) {
            $(".card-errors").html("");
            // Disable button to disallow multiple click
            $(this).attr("disabled", true);
            $(this).html('<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>');
            //var firstName = document.getElementById('firstName').value;
            //var lastName = document.getElementById('lastName').value;
            
            var cardholderName = firstName+" "+lastName;
            var form_data = $("#payment-form").serialize();
            
          stripe.createPaymentMethod('card', cardElement, {
            billing_details: {name: cardholderName.value}
          }).then(function(result) {
            if (result.error) {
               console.log('error1');
               var form_values =  getFormData('#payment-form');
               //form_values.push({"error_message": response.error});
               console.log(result.error.code);
               form_values["error_code"]=result.error.code;
               form_values["error_message"]=result.error.message;
               send_failed_data(form_values);
            } else {
              // Otherwise send paymentMethod.id to your server (see Step 2)
              fetch('<?php echo base_url('payment/stripe/stripe_paymentIntent'); ?>', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ payment_method_id: result.paymentMethod.id, customer_detail: form_data})
              }).then(function(result) {
                // Handle server response (see Step 3)
                result.json().then(function(json) {
                  handleServerResponse(json);
                })
              });
            }
          });    
        } else {
            $(".card-errors").html("Please fill all the fields to checkout.");
            $(this).attr("disabled", false);
            $(this).html("Pay Now");
        }
        
    });
    
    function handleServerResponse(response) {
      if (response.error) {
           console.log('error2');
           /*success_page(response.error,);
           console.log(response.error);*/
           
           var form_values =  getFormData('#payment-form');
           //form_values.push({"error_message": response.error});
           form_values["error_code"]=response.code;
           form_values["error_message"]=response.error;
           send_failed_data(form_values);
           console.log(response);
           console.log(form_values);
        // Show error from server on payment form
      } else if (response.requires_action) {
        // Use Stripe.js to handle required card action
        var action = response.next_action;
        if (action && action.type === 'redirect_to_url') {
          window.location = action.redirect_to_url.url;
        }
                
        stripe.handleCardAction(
          response.payment_intent_client_secret
        ).then(function(result) {
          if (result.error) {
               
            console.log('error3');
                var form_values =  getFormData('#payment-form');
               form_values["error_code"]=response.code;
               form_values["error_message"]=response.error;
               send_failed_data(form_values);
               console.log(response);
               console.log(form_values);
          } else {
              var form_data = $("#payment-form").serialize();
              
            // The card action has been handled
            // The PaymentIntent can be confirmed again on the server
            fetch('<?php echo base_url('payment/stripe/stripe_paymentIntent_3d'); ?>', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ payment_intent_id: result.paymentIntent.id, customer_detail: form_data })
            }).then(function(confirmResult) {
              return confirmResult.json();
            }).then(handleServerResponse);
          }
        });
      } else {
        // Show success message
        console.log("SUCCESS");
        var form_values = getFormData('#payment-form');
        send_values(form_values);
        //console.log(form_values);    
      }
    }
    
    function getFormData(dom_query){
        var out = {};
        var s_data = $(dom_query).serializeArray();
        
        for(var i = 0; i<s_data.length; i++){
            var record = s_data[i];
            out[record.name] = record.value;
        }
        return out;
    }

    function send_values(data1){
        $.ajax({
            type: "POST",
            url: "<?php echo base_url('payment/stripe/insert_all_data');?>",
            data:  data1,
            success: function(result){
            //if(result == 'success'){
                //var myurl = 'stripe/success';
                //success_page(data1,myurl);
            //}
            //$("html").html(result);
            var objJSON = JSON.parse(result);
            console.log(objJSON.id);
            
            if(objJSON.message == "success") {
                var goUrl = "<?php echo base_url("payment/stripe/success/"); ?>/"+objJSON.id;
                window.location.href = goUrl;
            }
            
       }});
    }
    
    function send_failed_data(data1){
        $.ajax({
            type: "POST",
            url: "<?php echo base_url('payment/stripe/insert_declined');?>",
            data:  data1,
            success: function(result){
            //if(result == 'success'){
                //var myurl = 'stripe/success';
                //success_page(data1,myurl);
            //}
            //$("html").html(result);
       
            var objJSON = JSON.parse(result);
            console.log(objJSON.id);
            
            var goUrl = "<?php echo base_url("payment/stripe/failed/"); ?>/"+ encodeURI(objJSON.message);
            window.location.href = goUrl;
                    
        }});
    }
    
    function success_page(data1,myurl){
        $.ajax({
            type: "POST",
            url: '<?php echo base_url();?>'+myurl,
            data:  data1,
            success: function(result){
            console.log(result);
            
       }});
    }
    
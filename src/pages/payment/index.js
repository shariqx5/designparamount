import React,{Component} from 'react';
import PaymentContainer from './paymentContainer';
import {UtilityValidationHelper,StringHelper} from '../../helpers';
import {CardElement} from '@stripe/react-stripe-js';
import {PaymentAPI,BrainTreeAPI} from '../../api';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Notiflix from 'notiflix';
import './payment.css';

const stringHelper = new StringHelper();
const brainTreeAPI = new BrainTreeAPI();
const paymentAPI = new PaymentAPI();
const utilityValidation = new UtilityValidationHelper();

class Payment extends Component{

    instance;
    constructor(props){
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            phone : '',
            address : '',
            company : "",
            country : "",
            region : "",
            city : "",
            zipcode : "",
            itemprice : "",
            itemname : "",
            quantity : 1,
            ptoken : "",
            category : "",
            discount : "",
            discounted_amount : '',
            original_amount : "",
            sale_type : "",
            company_id : "",
            item_desc : "",
            user_id : "",
            payment_gateway : "",
            currency : "",
            currency_symbol : "",
            coupon_id : "",
            payment_method_nonce : "",
            salesman : '',
            stripe : null,
            elements : null,
            clientToken : '', 
            customerDetails : {},
            payment_method_nonce : '',
            redirect : false,
            url : '',
            error : {
                firstName : "",
                lastName : "",
                email : "",
                phone : "",
                address : "",
                company : "",
                country : "",
                region : "",
                city : "",
                zipcode : "",
                formError : ""
            }
        }

        this.setStripeAndElements = this.setStripeAndElements.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setBrainTreeInstance = this.setBrainTreeInstance.bind(this);
        this.applyCoupon = this.applyCoupon.bind(this);
    }




    componentDidMount(){
        this.getTokenData();

    }



    getTokenData = async()=>{
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const token = params.get('token');
        if(token!==""){
             const response = await paymentAPI.getTokenData(token);
             if(response.status === 'success'){
                 this.setState({
                    category : response.category,
                    currency_symbol : response.country_info.currency_symbol,
                    currency : response.currency,
                    discount : response.discount,
                    discounted_amount : response.discounted_amount,
                    item_desc : response.item_desc,
                    itemname : response.itemname,
                    itemprice : response.itemprice,
                    original_amount : response.original_amount,
                    payment_gateway : response.payment_gateway,
                    ptoken : response.payment_token,
                    sale_type : response.sale_type,
                    salesman : response.salesman
                 },()=>{
                    this.intializePaymentGateway();
                 })
             }
             else{
                this.setState({
                    redirect : true,
                    url : '/payment/expired'
                })
             }
        }
        else{
            this.setState({
                redirect : true,
                url : '/invalid-payment-link'
            })
        }
    }



    intializePaymentGateway = async()=>{
        const {payment_gateway} = this.state;
        if(payment_gateway === 'braintree'){
            const response = await brainTreeAPI.getClientToken();
            if(response.status === 'success'){
                this.setState({
                    clientToken : response.token
                })
            }
        }
    }




    onChange = (event)=>{
        const {name , value} = event.target;
        const error = utilityValidation.validateForm(name,value,this.state.error);
        this.setState({
            [name] : value,
            error
        })
    }



    onChangePhoneNumber = (values)=>{
        //  const {name ,value} = event.target;
         const {isValid,phoneNumberWithoutSpace,phoneDetails,phoneNumber} = values;
         if(isValid){
            const error = this.state.error;
            error.phone = "";
            this.setState({
                phone : phoneNumber,
                error
            })
         }
         else {
             const error = this.state.error;
             error.phone = "Invalid Phone Number";
             this.setState({
                 phone : phoneNumber,
                 error
             })
         }
      }




      selectCountry = (val)=>{
        this.setState({
          country : val
        })
      }
  
  
  
      selectRegion = (val)=>{
        this.setState({
          region : val
        })
      }



      setStripeAndElements = (stripe,elements)=>{
          this.setState({
              stripe,
              elements
          })
      }



      
      setBrainTreeInstance = (instance)=>{
            this.instance = instance;
      }



      handleSubmit = async(event)=>{
        event.preventDefault();
        const {error} = this.state;
        error.formError = "";
        this.setState({
            error
        })

        const {firstName,lastName,email,phone,address,country,region,city,zipcode,payment_gateway} = this.state;
        if(utilityValidation.checkErrorExist(this.state.error)){
            if(firstName!=="" && lastName!=="" && email !=="" && phone!=="" && address!=="" && country!=="" && region!=="" && city!=="" && zipcode!==""){

                this.generateCustomerDetailsObject();
                if(payment_gateway === 'stripe'){
                    await this.handleStripePayment();
                }
                else{
                    await this.handleBrainTreePayment();
                }
               
            }
            else{
                error.formError = "Fill all required fileds";
                this.setState({
                    error
                })
            }
            
        }
        else {
            //show user a message 
            //that resolve all errors first
            error.formError = "Resolve all error first";
            this.setState({
                error
            })
        }
        
    }




    handleStripePayment = async()=>{
        
        Notiflix.Loading.Standard("Creating Token...");
        const stripeTokenResponse = await this.createPaymentToken();
        if(stripeTokenResponse.error){
            //removing loader
            Notiflix.Loading.Remove();
            //send failed data to server
            this.submitFailedRequest(stripeTokenResponse.error);
        }
        else {
            //call paymentIntentAPI
            Notiflix.Loading.Change("Submitting your request...");
            const simplePaymentIntentResponse = await this.submitPaymentIntentRequest(stripeTokenResponse.paymentMethod.id);
            this.handleServerResponse(simplePaymentIntentResponse);
        }
    }



    handleBrainTreePayment = async()=>{
        try{
            Notiflix.Loading.Standard("Connecting with Payment Gateway");
            const {nonce} = await this.instance.requestPaymentMethod();
            Notiflix.Loading.Remove();
            this.setState({
                payment_method_nonce : nonce
            },()=>this.submitBraintreePaymentForm())
        }
        catch(error){
            Notiflix.Loading.Remove();
            console.log(error);
        }

    }



    submitBraintreePaymentForm = async()=>{
        const {customerDetails,payment_method_nonce} = this.state;
        customerDetails.payment_method_nonce = payment_method_nonce;

        Notiflix.Loading.Standard("Finalizing Payment");
        
        const response = await brainTreeAPI.submitForm(customerDetails);

        Notiflix.Loading.Remove();
        
        if(response.status === 'success'){
            this.props.history.push({
                pathname : "/payment/success",
                state : {
                    itemName : this.state.itemname,
                    itemOriginalPrice : this.state.original_amount,
                    itemDiscount : this.state.discount,
                    itemDiscountedPrice : this.state.itemprice,
                    itemCurrency : this.state.currency
                }
            });
        }
        else{
            this.props.history.push({
                pathname : "/payment/failed",
                state : {
                    message : response.message
                }
            });
        }
    }




    handleServerResponse = (response)=>{
        if(response.error){
            Notiflix.Loading.Remove();
            this.submitFailedRequest(response);
        }
        else if(response.requires_action){
            //changing loader text
            Notiflix.Loading.Change("Launching 3d secure");
            this.handle3DSecureRequest(response);
        }
        else{
            //Removing Loader
            Notiflix.Loading.Remove();
            //payment success page
            this.submitSuccessRequest();
        }
    }




    createPaymentToken = async()=>{
        const {stripe, elements,firstName,lastName} = this.state;
        const name = firstName + " "+lastName;

        const card = elements.getElement(CardElement);
        const result = await stripe.createPaymentMethod({
            type : 'card',
            card : card,
            billing_details : {
                name
            }
        })

        return result;
    }



    handle3DSecureRequest = async(response)=>{
        Notiflix.Loading.Remove();
        var action = response.next_action;
        if(action && action.type === 'redirect_to_url'){
            this.props.history.push(action.redirect_to_url.url);
        }

        const {stripe} = this.state;
        const cardHandlerResponse = await stripe.handleCardAction(response.payment_intent_client_secret);
        if(cardHandlerResponse.error){
            //sending Failed Request to Server
            this.submitFailedRequest(cardHandlerResponse);
        }
        else{
            Notiflix.Loading.Standard("Finalizing payment")
            const _3DIntentResponse = await this.submitPaymentIntent3DSecureRequest(cardHandlerResponse.paymentIntent.id);
            this.handleServerResponse(_3DIntentResponse);
        }
    }



    submitPaymentIntentRequest = async(token)=>{
        const customerData = this.convertObjectToURL();
        const response = await paymentAPI.submitPaymentIntentRequest(token,customerData);
        return response;
        
    }



    submitPaymentIntent3DSecureRequest = async(token)=>{
        const customerData = this.convertObjectToURL();
        const response = await paymentAPI.submitPaymentIntent3DSecureRequest(token,customerData);
        return response;
    }



    submitSuccessRequest = async()=>{
        const {customerDetails} = this.state;
        const data = await paymentAPI.submitSuccessRequest(customerDetails);
        //logic for redirectnig user to payment success page
        this.props.history.push({
            pathname : "/payment/success",
            state : {
                itemName : this.state.itemname,
                itemOriginalPrice : this.state.original_amount,
                itemDiscount : this.state.discount,
                itemDiscountedPrice : this.state.itemprice,
                itemCurrency : this.state.currency
            }
        });
    }



    submitFailedRequest = async(response)=>{
        const {customerDetails} = this.state;
        customerDetails['error_code'] = response.code;
        customerDetails['error_message'] = response.message;
        const data = await paymentAPI.submitFailedRequest(customerDetails);
        //redirecting user to payment failed page
        this.props.history.push({
            pathname : "/payment/failed",
            state : {
                message : response.message
            }
        });
    }




    generateCustomerDetailsObject = ()=>{
        const {firstName,lastName,email,phone,address,company,country,region,city,zipcode,
            itemprice,itemname,item_desc,quantity,ptoken,category,
            discount,original_amount,sale_type,company_id,
            user_id,payment_gateway,currency,coupon_id,payment_method_nonce
        } = this.state;
        const customerDetails = {
            firstname:firstName,
            lastname:lastName,
            clientemail : email,
            phonenum : phone,
            address,
            companyname : company,
            country,
            statename : region,
            city,
            zipcode : zipcode,
            itemprice,
            itemname,item_desc,
            quantity,
            ptoken,
            category,
            discount,
            original_amount,
            sale_type,
            company_id,
            user_id,
            payment_gateway,
            currency,
            coupon_id,
            payment_method_nonce
        }

        this.setState({
            customerDetails
        })
    }




    convertObjectToURL = ()=>{
        const {customerDetails} = this.state;
        return stringHelper.convertObjectToURL(customerDetails);
    }



    applyCoupon = (couponId,coupon_code,coupon_discount)=>{
        var {itemprice,discount,discounted_amount,original_amount} = this.state;
        original_amount = Number(original_amount);
        itemprice = Number(itemprice);
        discount = discount!==""?Number(discount):"";
        discounted_amount = discounted_amount!==""?Number(discounted_amount):"";
        coupon_discount = coupon_discount!==""?Number(coupon_discount):"";

        var coupon_discount_number = (original_amount/100)*coupon_discount;
        itemprice = original_amount - coupon_discount_number;
        discount = coupon_discount_number;
        discounted_amount = coupon_discount_number;

        this.setState({
            itemprice,
            discount,
            discounted_amount,
            coupon_id: couponId
        })

    }



    render(){
        const {redirect , url} = this.state;
        if(redirect){
           return <Redirect to = {url}/>
        }
        return(
            <PaymentContainer 
            {...this.state}
            instance = {this.instance}
            setBrainTreeInstance = {this.setBrainTreeInstance}
            onChange = {this.onChange}
            onChangePhoneNumber = {this.onChangePhoneNumber}
            selectCountry = {this.selectCountry}
            selectRegion = {this.selectRegion}
            onFormSubmit = {this.handleSubmit}
            setStripeAndElements = {this.setStripeAndElements}
            applyCoupon = {this.applyCoupon}
            />
        )
    }
}


export default withRouter(Payment);
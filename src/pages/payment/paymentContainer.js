import React,{Component} from 'react';
import {PaymentLayout,Layout} from '../../components';
import ReactIntlTelInput from 'react-intl-tel-input';
import {CountryDropdown,RegionDropdown} from 'react-country-region-selector';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm';
import 'react-intl-tel-input/dist/main.css';


const stripe = loadStripe('pk_test_51H20O4D6ElJzVKH7q3IqB8EhIgiTAT2lCFxgrcS9I8YHLOu2gEoCf6YNqvc01yghofj4oreXvbDdkRSYnEL2fTKH005njOZ6D1');

class PaymentContainer extends Component{

    constructor(props){
      super(props);
    }


    render(){
      const {country, region, error} = this.props;
        return(
           <Layout>
               <div className="container" id="payment-container">
               <div className="row">
    <div className="col-md-4 offset-md-1 order-md-2 mb-4 payment-box">
      <h4 className="justify-content-between align-items-center mb-3 section-heading payment-section-heading">
        <span className="badge badge-secondary binfo">3</span>
        <span>Billing Invoice</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed binvoice">
          <div>
            <h5 className="my-0">Branded Logo</h5>
          </div>
          
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed binvoice">
          <div>
            <h6 className="my-0">Item Price</h6>
          </div>
          <span className="text-muted itemprice_coupon" id="itemPrice">USD 135</span>
        </li>
        
        <li className="list-group-item d-flex justify-content-between tinvoice">
          <span>Total (USD)</span>
          <strong id="calculated_total" className="total_amount">USD 100</strong>
        </li>
      </ul>
    
        <div id="coupon-div">
            <div className="input-group">
              <input type="text" className="form-control coupon-code binfo" placeholder="Promo code" />
              <div className="input-group-append">
                <button type="button" id="" className="btn btn-secondary apply-coupon binfo">Redeem</button>
              </div>
            </div>
            
            <div className="coupon-response-div"></div>
            
        </div>
        
        <div className="complete"> 
            <a href="https://www.braintreegateway.com/merchants/yd27yfdzq222kq2t/verified" target="_blank" style={{display : "table",margin : "12px auto 30px auto",clear:"both"}}> 
                <img src="https://s3.amazonaws.com/braintree-badges/braintree-badge-wide-dark.png" width="289px" height="48px" border="0" /> 
            </a> 
            <a href="javascript:void(0)" target="_blank" className="money-back-img" display = {{display : "table", margin : "12px auto",clear : "both"}}> 
                <img src="https://designcater.com/assets/images/checkout/moneyback.png" width="200px" border="0" />
            </a>
        </div>
    </div>
    <div className="col-md-7 billborder payment-box-second" id="main-formarea">
		    <h4 className="justify-content-between align-items-center mb-3 section-heading payment-section-heading">
                <span className="badge badge-secondary">1</span>
                <span>Billing Information</span>
	        </h4>
      <form id="payment-form" className="needs-validation" action="https://designcater.com/payment/paynow/paycredit" method="post">
        <div className="row">
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control binfo" id="firstname" name="firstName" value={this.props.firstName} onChange={this.props.onChange} placeholder="First Name" required />
            {error.firstName!=="" && <label htmlFor="firstname-error" className="error">{error.firstName}</label>}
          </div>
          <div className="col-md-6 mb-3">
              
             
            
            <input type="text" className="form-control binfo" id="lastName" name="lastName" value={this.props.lastName} onChange={this.props.onChange} placeholder="Last Name" required />
            {error.lastName!=="" && <label htmlFor="lastname-error" className="error">{error.lastName}</label>}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">

            <input type="email" className="form-control binfo" id="email" name="email" value={this.props.email} onChange={this.props.onChange} placeholder="Email Address" required />
            {error.email!=="" && <label htmlFor="email" className="error">{error.email}</label>}
          </div>
          <div className="col-md-6 mb-3">
            <div className="input-group">
                <div className="input-group-prepend">
                 {/* <input type="tel" id="phone" name = "phonenum" className="form-control binfo" onkeypress="javascript:return isNumber(event)" style={{width:"100%",paddingRight:"109px"}}/> */}
                <ReactIntlTelInput
                onPhoneNumberChange={(isValid,phoneNumberWithoutSpace,phoneDetails,phoneNumber,notIdentified)=>{
                  this.props.onChangePhoneNumber({isValid,phoneNumberWithoutSpace,phoneDetails,phoneNumber})
                }}
                inputClassName="form-control"
                fieldName = "phone"
                />
                
                </div>
                {error.phone !== "" && <label htmlFor="phone" className="error">{error.phone}</label>}
                {/* <!--<input type="number" minlength="9" min="0" className="form-control" name="phonenum" id="phoneNumber" placeholder="Please Enter Your Number Here" required>--> */}
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
            </div>
             
            <span id="valid-msg" className="hide"></span>
            <span id="error-msg" className="hide"></span>
          </div>
        </div>
        
        <div className="mb-3">
          <input type="text" className="form-control binfo" id="address" name="address" value={this.props.address} onChange={this.props.onChange} placeholder="Address" required />
          {error.address !== "" && <label htmlFor="address" className="error">{error.address}</label>}
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control binfo" id="companyname" name="company" value={this.props.company} onChange={this.props.onChange} placeholder="Company" required />
            {error.company !== "" && <label htmlFor="company" className="error">{error.company}</label>}
          </div>
          <div className="col-md-6 mb-3">
            {/* <!--<input type="text" className="form-control" id="city" name="city" placeholder="City" required>--> */}
            <CountryDropdown 
            value = {this.props.country}
            onChange = {(val)=>this.props.selectCountry(val)}
            classes = {"form-control"}
            />
            {error.country !== "" && <label htmlFor="country" className="error">{error.country}</label>}
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-5 mb-3">
            <RegionDropdown 
            country = {this.props.country}
            value = {this.props.region}
            onChange = {(val)=>this.props.selectRegion(val)}
            classes = {"form-control"}
            />
            {error.region !== "" && <label htmlFor="region" className="error">{error.region}</label>}
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control binfo" id="city" name="city" value={this.props.city} onChange={this.props.onChange} placeholder="City" required />
            {error.city !=="" && <label htmlFor="city" className="error">{error.city}</label>}
          </div>
          <div className="col-md-3 mb-3">

            <input type="number" className="form-control binfo" id = "zipcode" name="zipcode" value={this.props.zipcode} onChange={this.props.onChange} minlength="4" min="0" id="zip" placeholder="Zip Code" required />
            {error.zipcode !=="" && <label htmlFor="zipcode" className="error">{error.zipcode}</label>}
          </div>
        </div>
        
        <h4 className="justify-content-between align-items-center mb-3 mt-3 section-heading payment-section-heading" style={{marginBottom : "0"}}>
	        <span className="badge badge-secondary binfo">2</span>
	        <span>Payment Information</span>
	      </h4>

        <div className="row">
            <div className="col-md-12" id="bt-dropin">
                <Elements stripe={stripe}>
                    <CheckoutForm setStripeAndElements = {this.props.setStripeAndElements}/>
                </Elements>
            </div>
        </div>
        
        <hr className="mb-4" />
        <input type="hidden" id="final_itemprice" name="itemprice" class="itemprice" value={this.props.itemprice!==""?this.props.itemprice : ""} />
        <input type="hidden" id="check_itemname" name="itemname" id="itemname" class="itemname" value={this.props.itemname!==""?this.props.itemname : ""} />
        <input type="hidden" id="check_quantity" name="quantity" id="quantity" value = "1" />
        <input type="hidden" id="check_ptoken" name="ptoken" value={this.props.payment_token!==""?this.props.payment_token : ""} />
        <input type="hidden" id="check_category" name="category" value={this.props.category !== ""?this.props.category : ""} />
        <input type="hidden" name="discount" id="discount" value={this.props.discount!==""?this.props.discount : ""} />
        <input type="hidden" id="check_orignal_amount" name="original_amount" id="original_amount" value={this.props.original_amount!==""?this.props.original_amount : ""} />
        <input type="hidden" id="check_sale_type" name="sale_type" value={this.props.sale_type!==""?this.props.sale_type : ""} />
        <input type="hidden" id="company_id" name="company_id" class="company_id" value={this.props.company_id !== ""?this.props.company_id : ""} />
        <input type="hidden" id="item_desc" name="item_desc" class="item_desc" value={this.props.item_desc!==""?this.props.item_desc : ""} />
        <input type="hidden" name="user_id" value={this.props.user_id!==""?this.props.user_id : ""} />
        <input type="hidden" name="payment_gateway" value={this.props.payment_gateway !== ""?this.props.payment_gateway : ""} />
        <input type="hidden" id="check_currency" name="currency" value={this.props.currency!==""?this.props.currency : ""} />
        <input type="hidden" id="coupon_id" name="coupon_id" class="coupon_id" value="" />
        <input type="hidden" id="nonce" name="payment_method_nonce" />
        <button className="btn btn-primary btn-lg btn-block binfo" id = "final_submit_btn" type="submit" onClick={this.props.onFormSubmit}>Pay Now</button>
        {error.formError!=="" && <label htmlFor="form-error" className="error" style={{textAlign:"center"}}>{error.formError}</label>}
      </form>
    </div>
  </div>
           
               </div>
           </Layout>
        )
    }
}


export default PaymentContainer;
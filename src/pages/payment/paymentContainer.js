import React,{Component} from 'react';
import {Layout} from '../../components';
import ReactIntlTelInput from 'react-intl-tel-input';
import {CountryDropdown,RegionDropdown} from 'react-country-region-selector';
import Stripe from './stripe';
import Braintree from './braintree';
import BrainTreeMark from './braintree/braintreeMark';
import Redeem from './redeem';
import 'react-intl-tel-input/dist/main.css';

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
        <h5 className="my-0">{this.props.itemname}</h5>
          </div>
          
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed binvoice">
          <div>
            <h6 className="my-0">Item Price</h6>
          </div>
        <span className="text-muted itemprice_coupon" id="itemPrice">{this.props.currency+" "+this.props.original_amount}</span>
        </li>
        {this.props.discount!==""?(
          <li className="list-group-item d-flex justify-content-between" id="discount_div" style={{display:"flex !important"}} >
          <div> <h6 className="my-0">Discount</h6> 
             <small></small> 
          </div> 
        <span  id="itemDiscount">{this.props.currency+" "+this.props.discount}</span> 
          </li>

        ):""}
        <li className="list-group-item d-flex justify-content-between tinvoice">
          <span>Total (USD)</span>
        <strong id="calculated_total" className="total_amount">{this.props.currency+" "+this.props.itemprice}</strong>
        </li>
      </ul>
    
        <Redeem applyCoupon = {this.props.applyCoupon}/>
        
        <div className="complete"> 
            {this.props.payment_gateway === "braintree"?(<BrainTreeMark />):""}
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
                {this.props.payment_gateway === 'stripe'? (
                  <Stripe setStripeAndElements = {this.props.setStripeAndElements}/>
                ):(
                  <Braintree clientToken = {this.props.clientToken} instance = {this.props.instance} setBrainTreeInstance = {this.props.setBrainTreeInstance}/>
                )}
            </div>
        </div>
        
        <hr className="mb-4" />
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
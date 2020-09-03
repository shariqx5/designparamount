import React,{Component} from 'react';
import {PaymentAPI} from '../../../api';
import {UtilityValidationHelper,ValidationConfig} from '../../../helpers';
import PaymentGeneratorLayout from './paymentGeneratorLayout';
import {withRouter} from 'react-router-dom';


const utilityValidation = new UtilityValidationHelper();
const validation = new ValidationConfig();
const paymentAPI = new PaymentAPI();

class PaymentGenerator extends Component{

    state = {
      categories : [],
      salesman : [],
      itemName : '',
      itemPrice : '',
      itemDiscount : '',
      itemDesc : '',
      itemCategory : '',
      salesPerson : '',
      paymentGateway : '',
      saleType : '',
      token : '',
      error : {
        itemName : "",
        itemPrice : "",
        itemDiscount : "",
        itemCategory : "",
        itemDesc : "",
        salesPerson : "",
        paymentGateway : "",
        saleType : "",
        generalError : ""
      }
    }



    componentDidMount(){
        this.loadCategories();
        this.loadSalesPerson();
    }



    onChange = (event)=>{
        const {name,value} = event.target;
        var error = {};
        if(name !== "itemDiscount"){
           error = utilityValidation.validateForm(name,value,this.state.error);   
        }
        else{
          error = this.checkForValidDiscount(value);
        }

        this.setState({
          [name]:value,
          error
        }) 
       
    }



    loadCategories = async()=>{
      const data = await paymentAPI.getItemCategory();
      if(data.status){
        this.setState({
          categories : data.data
        })
      }
    }



    loadSalesPerson = async()=>{
      const data = await paymentAPI.getSalePersons();
      if(data.status){
        this.setState({
          salesman : data.data
        })
      }
    }




    onFormSubmit = async(event)=>{
      event.preventDefault();
      const {itemName,itemPrice,itemCategory,saleType,salesPerson,paymentGateway,error} = this.state;
      error.generalError = "";
      this.setState({
        error
      })


      if(utilityValidation.checkErrorExist(error)){
          if(itemName!=="" && itemPrice!=="" && itemCategory!=="" && saleType!=="" && salesPerson!=="" && paymentGateway!==""){
            
            const formObject = this.generateObjectForServer();
            const response = await paymentAPI.generatePaymentLink(formObject);
            if(response.status){
                this.setState({
                  token : response.data.token
                });

                this.props.history.push(`/payment/generator/link?method=${paymentGateway}&token=${response.data.token}`);
            }
          }
          else{
            error.generalError = "Please fill all the required fields";
            this.setState({
              error
            })
          }
      }
      else{
        error.generalError = "Please resolve all the errors first";
        this.setState({
          error
        })
      }
    }



    generateObjectForServer = ()=>{
      const {itemName,itemPrice,itemDiscount,itemDesc,itemCategory,salesPerson,paymentGateway,saleType} = this.state;
      const formObject = {
        item : itemName,
        category : itemCategory,
        item_desc : itemDesc,
        discount : itemDiscount,
        sale_type : saleType,
        salesman : salesPerson,
        payment_gateway : paymentGateway,
        original_amount : itemPrice,
        amount : itemPrice
      };


      return formObject;
    }



    checkForValidDiscount(itemDiscount){
        var {itemPrice, error} = this.state;
        itemPrice = Number(itemPrice);
        itemDiscount = Number(itemDiscount);

        if(itemDiscount>0 || itemDiscount!==""){
          if(!validation.checkforvaliddouble(itemDiscount)){
              error.itemDiscount = "Please enter a valid numeric value";
          }
          else{
                  if(itemPrice <= itemDiscount){
                    error.itemDiscount = "Discount must be less than actual value";
                  }
                  else {
                    error.itemDiscount = "";
                  }
          }
        }
        else{
          error.itemDiscount = "";
        }


        return error;
    }


    render(){
      const {error} = this.state;
        return(
          <PaymentGeneratorLayout>
              
              <form onSubmit={this.onFormSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="item-name">Item Name*</label>
                        <input className="form-control" name="itemName" onChange={this.onChange} value={this.state.itemName} type="text" placeholder="Enter Item Name" required/>
                        {error.itemName!=="" && <label htmlFor="itemName" className="error">{error.itemName}</label>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="item-name">Item Price*</label>
                        <input className="form-control" name="itemPrice" onChange={this.onChange} value={this.state.itemPrice} type="text" placeholder="Enter Your Price" required/>
                        {error.itemPrice !== "" && <label htmlFor="itemPrice" className="error">{error.itemPrice}</label>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="item-price">Item Discount</label>
                        <input className="form-control" type="text"  name="itemDiscount" onChange={this.onChange} value={this.state.itemDiscount} placeholder="Enter discount"/>
                        {error.itemDiscount!=="" && <label htmlFor="itemDiscount" className="error">{error.itemDiscount}</label>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="item-desc">Item Description</label>
                        <textarea className="form-control" name="itemDesc" onChange={this.onChange} value={this.state.itemDesc} rows="6" placeholder="Enter Item Description"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="item-category">Item Category*</label>
                        <select name="itemCategory" onChange={this.onChange} value={this.state.itemCategory} className="form-control">
                          <option>Select Category</option>
                                {this.state.categories.length>0?(
                                  this.state.categories.map((category,i)=>(
                                  <option key={i} value={category.category}>{category.category}</option>
                                ))
                                ):(<option>No Categories</option>)}
                        </select>
                        {error.itemCategory!=="" && <label htmlFor="item-category" className="error">{error.itemCategory}</label>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="salesman">Sales Person*</label>
                        <select name="salesPerson" value={this.state.salesPerson} onChange={this.onChange}  className="form-control">
                          <option>Select Sales Person</option>
                        {this.state.salesman.length>0?(
                                  this.state.salesman.map((saleman,i)=>(
                                  <option key={i} value={saleman.id}>{saleman.name}</option>
                                ))
                                ):(<option>No Sales Person</option>)}
                        </select>
                        {error.salesPerson!=="" && <label htmlFor="sale-person" className="error">{error.salesPerson}</label>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="payment-gateway">Payment Gateway*</label>
                      <select name="paymentGateway" value={this.state.paymentGateway} onChange={this.onChange} className="form-control">
                        <option>Select Payment Gateway</option>
                        <option value="stripe">Stripe</option>
                        <option value="braintree">Brain Tree</option>
                      </select>
                      {error.paymentGateway!=="" && <label htmlFor="Payment Gateway" className="error">{error.paymentGateway}</label>}
                    </div>
                    <div className='col-sm-6'>
                      <div className="form-group">
                        <label htmlFor="sale-type">Sale Type*</label>
                        <select name="saleType" value={this.state.saleType} onChange={this.onChange} className="form-control">
                          <option>Select Sale Type</option>
                          <option value="Fresh Sales">Fresh Sales</option>
                          <option value="Upsell">Upsell</option>
                          <option value="FollowUp">Follow Up</option>
                        </select>
                        {error.saleType!=="" && <label htmlFor="Sale Type" className="error">{error.saleType}</label>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="form-group">
                          {error.generalError!=="" && <label htmlFor="general-error" className="error">{error.generalError}</label>}
                      </div>
                    </div>
                  </div>
                </form>

          </PaymentGeneratorLayout>
       )
    }
}








export default withRouter(PaymentGenerator);
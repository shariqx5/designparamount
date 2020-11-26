import React,{Component} from 'react';
import {PaymentAPI} from '../../api';
import {URLHelper} from '../../helpers';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Notiflix from 'notiflix';

const paymentAPI = new PaymentAPI();
const urlHelper = new URLHelper();

class PricingTable extends Component{

    constructor(props){
        super(props);
	}
	


	submitPaymentRequest = async(event)=>{

		event.preventDefault();

		Notiflix.Loading.Standard('Redirecting towards payment...');

		const {packagePrice,  packageCurrency, packageName} = this.props;
		const response = await paymentAPI.generatePaymentLink(packagePrice, packageCurrency, packageName);
		var paymentBaseURL = '';
		const {token, payment_gateway} = response;
		if(payment_gateway === 'stripe'){
			paymentBaseURL = urlHelper.getURL('payment-stripe');
		}
		else{
			paymentBaseURL = urlHelper.getURL('payment-braintree');
		}

		Notiflix.Loading.Remove();

		paymentBaseURL = paymentBaseURL+"?token="+token;
		this.props.history.push(paymentBaseURL);
	}

    render(){
        return(
            <div className={this.props.packageClass!==""?(`single-price ${this.props.packageClass}`):("single-price")}>
							<div className="price-head">
								<img src={`images/pricing/service/${this.props.packageImage}`} alt="" />
                                <h2>{this.props.packageName}</h2>
                                <h3>{`$${this.props.packagePrice}`}</h3>
                                <p>{this.props.packageTagline}</p>
							</div>
							<div className="price-detail">
								<ul>
									<li>
										<div className="price-icon"><img src="images/pricing/icons/1.png" alt="" /></div>
										<p>Custom Logo Design & Business Card Design</p>
									</li>
									<li>
										<div className="price-icon"><img src="images/pricing/icons/5.png" alt="" /></div>
										<p>Unlimited revisions</p>
									</li>
									<li>
										<div className="price-icon"><img src="images/pricing/icons/2.png" alt="" /></div>
										<p>1-2 business day turnaround</p>
									</li>
									<li>
										<div className="price-icon"><img src="images/pricing/icons/3.png" alt="" /></div>
										<p>Easy communication via our platform, email, or Zapier</p>
									</li>
									<li>
										<div className="price-icon"><img src="images/pricing/icons/4.png" alt="" /></div>
										<p>14-day 100% satisfaction guarantee</p>
									</li>
								</ul>
							</div>
							<div className="price-link-area">
								<a href="#" onClick={this.submitPaymentRequest} className="a-link more-padding-lr filled-link">Order Now</a>
							</div>
							<div className="price-link-area">
								<a href="standard.html" className="a-link more-padding-lr  mt-10"><Link className="white-color" to={`${this.props.url}`}>Learn More</Link> <i className="fas fa-long-arrow-alt-right"></i></a>
							</div>
						</div>
        )
    }
}


export default withRouter(PricingTable);
import React,{Component} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {StripeAPI} from '../../../api';
import CheckoutForm from '../stripe/checkoutForm';

const stripeAPI = new StripeAPI();
class Stripe extends Component{

    constructor(props){
        super(props);
        this.state = {
            stripe : '',
            publicKey : ''
        }
    }


    componentDidMount(){
        this.loadStripeKeys();
    }


    loadStripeKeys = async()=>{
        const response = await stripeAPI.loadStripeKeys();
        if(response.status){
            const stripe = loadStripe(response.publishable_key);
            this.setState({
                publicKey : response.publishable_key,
                stripe
            })
        }
    }


    render(){
        const {stripe} = this.state;
        return(
            <React.Fragment>
                {stripe !== ""?(
                    <Elements stripe = {stripe}>
                         <CheckoutForm setStripeAndElements = {this.props.setStripeAndElements}/>
                    </Elements>
                ):""}
            </React.Fragment>
        )
    }
}


export default Stripe;
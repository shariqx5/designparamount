import React,{Component} from 'react';
import {ElementsConsumer , CardElement} from '@stripe/react-stripe-js';
import CardSection from './cardSection';

class CheckoutForm extends Component{

    constructor(props){
        super(props);
    }


    componentDidMount(){
            const {stripe,elements} = this.props;
            console.log(`value of stripe is ${stripe} and value of elements is ${elements}`)
            this.props.setStripeAndElements(stripe,elements);
    }



    componentDidUpdate(prevProps,prevState){
        if(prevProps.stripe!==this.props.stripe && prevProps.elements!==this.props.elements){
            this.props.setStripeAndElements(this.props.stripe,this.props.elements);
        }
    }



    render(){
       return(
               <CardSection />
       )
    }
}


function InjectedCheckoutForm(props){
    return(
        <ElementsConsumer>
            {({stripe,elements})=>(
                <CheckoutForm stripe={stripe} elements = {elements} {...props}/>
            )}
        </ElementsConsumer>
    )
}



export default InjectedCheckoutForm;
import React,{Component} from 'react';
import PaymentGeneratorLayout from './paymentGeneratorLayout';
import {Link} from 'react-router-dom';

class PaymentGeneratorResponse extends Component{


    state = {
        link : ""
    }


    componentDidMount(){
        this.generateLink();
    }



    generateLink = ()=>{
        const URL = window.location.search;
        const params = new URLSearchParams(URL);
        const method = params.get("method");
        const token = params.get("token");

        if(method !== "" || token!==""){
            const link = `/payment/${method}?token=${token}`;
            this.setState({
                link
            })
        }
    }


    render(){
        return(
            <PaymentGeneratorLayout>
                <div className="row">
                    <p><strong>Your Payment Link is : </strong><Link to={this.state.link} target="_blank">{window.location.origin+this.state.link}</Link></p> 
                </div>
            </PaymentGeneratorLayout>
        )
    }
}


export default PaymentGeneratorResponse;
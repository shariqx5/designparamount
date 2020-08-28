import React,{Component} from 'react';
import PaymentHeader from './paymentHeader';

class PaymentLayout extends Component{


    constructor(props){
        super(props);
    }


    componentDidMount(){
        const link = document.createElement("link");
        link.href = "/public/css/paymentLayout.css";
        link.rel = "stylesheet";

        document.head.append(link);
    }



    render(){
        return(
            <React.Fragment>
                <PaymentHeader />
                <div className="container">
                    <div className="py-3 text-center"></div>
                    {this.props.children}
                    <div id="error_message" class="error_message"></div>
                    <footer class="my-5 pt-5 text-muted text-center text-small"></footer>
                </div>
            </React.Fragment>
        )
    }
}

export default PaymentLayout;
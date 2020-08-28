import React,{Component} from 'react';

class PaymentHeader extends Component{

    render(){
        return(
            <header className="header"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-md-3 col-12"> 
                            <div className="logo"> 
                                <a href="https://designcater.com">
                                    <img src="https://designcater.com/assets/images/logo-black.svg" />
                                </a> 
                            </div> 
                        </div> 
                        <div className="col-md-9 col-5 d-none d-sm-none d-md-block"> 
                                <a href="tel:+17187667750" className="company_number"><i className="icon-icons-01"></i> 718-766-7750</a>
                        </div> 
                    </div> 
                </div>
      	    </header>
        )
    }
}


export default PaymentHeader;
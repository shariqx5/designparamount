import React,{Component} from 'react';
import {Layout} from '../../../components';
import style from './paymentGenerator.module.css';

class PaymentGeneratorLayout extends Component{

    render(){
        return(
                <div className={style.wrapper}>
                    <div className={`container ${style.title_heading}`}>
                        <h3>Payment Link Generator</h3>
                    </div>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
        )
    }
}  


export default PaymentGeneratorLayout;
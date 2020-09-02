import React,{Component} from 'react';
import {PaymentAPI} from '../../../api';
import Notiflix from 'notiflix';

const paymentAPI = new PaymentAPI();
class Redeem extends Component{


    state = {
        coupon : "",
        couponError : "",
        couponSuccess : ""
    }



    onChange = (event)=>{
        const {name,value} = event.target;
        var couponError = "";
        if(value===""){
            couponError = "Please enter your coupon";
        }
        this.setState({
            coupon : value,
            couponError
        })
    }



    applyCoupon = async()=>{
        const {coupon} = this.state;
        if(coupon!==""){
            Notiflix.Loading.Standard("Applying coupon...");
            const response = await paymentAPI.applyCoupon(coupon);
            Notiflix.Loading.Remove();
            if(response.status === "success"){
                const data = response.data[0];
                this.setState({
                    couponSuccess : "Coupon applied !"
                })
                this.props.applyCoupon(data.coupon_id,data.coupon,data.discount);
            }
            else{
                this.setState({
                    couponError : "Invalid coupon code."
                })
            }
        }
        else{
            this.setState({
                couponError : "Please enter your coupon"
            })
        }
    }


    render(){
        return(
            <div id="coupon-div">
                <div className="input-group">
                    <input type="text" className="form-control coupon-code binfo" name="coupon" onChange={this.onChange} placeholder="Promo code" />
                <div className="input-group-append">
                    <button type="button" id="" className="btn btn-secondary apply-coupon binfo" onClick={this.applyCoupon}>Redeem</button>
                </div>
                </div>
                {this.state.couponSuccess!=="" && <label htmlFor="couponSuccess" className="text-success">{this.state.couponSuccess}</label>}
                    {this.state.couponError!=="" && <label htmlFor="couponError" className="error">{this.state.couponError}</label>}
                <div className="coupon-response-div"></div>
        </div>
        )
    }
}


export default Redeem;
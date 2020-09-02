import React,{Component} from 'react';
import {Layout} from '../../components';
import style from './transactionSuccess.module.css';
import Skeleton from 'react-loading-skeleton';
import {Redirect} from 'react-router-dom';

class TransactionSuccess extends Component{

  state = {
    redirect : false,
    url : "",
    itemName : "",
    itemOriginalPrice : "",
    itemDiscount : "",
    itemDiscountedPrice : "",
    itemCurrency : ""
  }

  componentDidMount(){
    if(this.props.location.state !== "" && this.props.location.state !== undefined){
      const {itemName,itemOriginalPrice,itemDiscount,itemDiscountedPrice,itemCurrency} = this.props.location.state;
      this.setState({
        itemName,
        itemOriginalPrice,
        itemDiscount,
        itemDiscountedPrice,
        itemCurrency
      })
    }
    else{
      this.setState({
        redirect : true,
        url : '/'
      })
    }
  }


    render(){
      const {redirect, url} = this.state;
      if(redirect){
        return <Redirect to = {url} />
      }

        return(
            <Layout>
                {/* // <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TF8J9W"
        height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
{/* // <!-- End Google Tag Manager (noscript) --> */}
	    <section className={`${style.thank_section}`}>
		<div className="container">
			<div className={`${style.thankyou_container}`}>
				<div className={`${style.thank_tick}`}>
					<i className="fa fa-check"></i>
					<span className="before"></span>
					<span className="after"></span>
				</div>
				<div className={`${style.thank_detail}`}>
					<h1>Transaction Successful</h1>
					<h3>Thanks for shopping with us. Your payment has been successfully charged and a confirmation email has been sent to your email Address. We welcome you on board, Our team will start working on your project soon. Stay connected!</h3>
					<div className={`${style.order_detail}`}>
						<h2>Order Summary</h2>

						<table className={`table ${style.success_table}`}>
    						<tbody>
                                <tr>
                                  <th scope="row" style={{borderTop:"none"}}>Item</th>
        <td style={{borderTop:"none"}}>{this.state.itemName!==""?this.state.itemName : <Skeleton />}</td>
                                </tr>
                                
                                <tr>
                                  <th scope="row">Item Price</th>
                                  {/* <td><?php echo $currency.$itemprice; ?></td> */}
                                  <td>{this.state.itemOriginalPrice!==""?this.state.itemOriginalPrice:<Skeleton />}</td>
                                </tr>
                                {this.state.itemDiscount!==""?(
                                  <tr>
                                    <th scope="row">Discount</th>
                                    <td>{this.state.itemDiscount}</td>
                                  </tr>
                                ):""}
                                
                                <tr>
                                  <th scope="row">Total</th>
                                  {/* <td><?php echo $currency.$total; ?></td> */}
                                  <td>{this.state.itemDiscountedPrice!==""?this.state.itemCurrency+" "+this.state.itemDiscountedPrice:<Skeleton />}</td>
                                </tr>
                            </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
            </Layout>
        )
    }
}


export default TransactionSuccess;
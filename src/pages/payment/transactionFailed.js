import React,{Component} from 'react';
import style from './transactionFailed.module.css';
import {Layout} from '../../components';

class TransactionFailed extends Component{


    render(){
        return(
            <Layout>
    <section className={`${style.thank_section}`}>
		<div className="container">
			<div className={`${style.thankyou_container}`}>
				<div className={`${style.thank_tick}`}>
					<i className="fa fa-times"></i>
					<span className="before"></span>
					<span className="after"></span>
				</div>
				<div className={`${style.thank_detail}`}>
					<h1>Transaction Failed</h1>
					<h3>You Transaction Failed due to invalid Card</h3>
					<div className={`${style.order_detail}`}>
						<h2>Please Try Again..!!</h2>
					

						{/* <!--<ul>
							<li>Item</li>
							<li>ABC</li>
							<li>Item Price</li>
							<li>100.00</li>
							<li>Discount</li>
							<li>-10.00</li>
							<li>Total</li>
							<li>90.00</li>
						</ul>--> */}
						
						
						{/* <!--<table className="table success-table">
    						<tbody>
                                <tr>
                                  <th scope="row" style="border-top: none;">Item</th>
                                  <td style="border-top: none;"><?php echo $itemname; ?></td>
                                </tr>
                                
                                <tr>
                                  <th scope="row">Item Price</th>
                                  <td><?php echo $currency.$itemprice; ?></td>
                                </tr>
                                
                                <tr>
                                  <th scope="row">Discount</th>
                                  <td><?php echo $discount; ?></td>
                                </tr>
                                
                                <tr>
                                  <th scope="row">Total</th>
                                  <td><?php echo $currency.$total; ?></td>
                                </tr>
                            </tbody>
						</table>--> */}
					</div>
				</div>
			</div>
		</div>
	</section>
        
            </Layout>
        )
    }
}


export default TransactionFailed;
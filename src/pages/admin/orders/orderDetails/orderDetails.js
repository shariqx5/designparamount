import React,{Component} from 'react';
import {ClientLayout,CollapsePanel} from '../../../../components';
import {OrderAPI} from '../../../../api';
import Skeleton from 'react-loading-skeleton';
import {withRouter} from 'react-router-dom';
import './orderDetails.css';


const orderAPI = new OrderAPI();

class OrderDetails extends Component{


    state = {
        orderDetails : '',
        orderId : ''
    }


    async componentDidMount(){

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const query = params.get('orderid');

        
        const response = await orderAPI.getSingleOrder(query);
        if(response.status === 'success'){
            this.setState({
                orderId : query,
                orderDetails : response.data[0]
            })
        }

    }




    handleButtonClick = (event)=>{
        event.preventDefault();
        const {orderId,orderDetails} = this.state;
        this.props.history.push({
            pathname : '/client/orders/detail/invoice',
            state : {
                orderDetails : orderDetails
            }
        });

    }




    render(){
        const {orderDetails} = this.state;
        return(
            <ClientLayout>
                 <CollapsePanel heading = {"Order Details"}>
                    <div className="order-details">
                    <table >
                        <tbody>
                            <tr>
                                <td>Order ID </td>
                                <td>{orderDetails!==""?orderDetails.invoice_id:<Skeleton />}</td>
                            </tr>
                            <tr>
                                <td>Order Name</td>
                                <td>{orderDetails!==""?orderDetails.itemname:<Skeleton />}</td>
                            </tr>
                            <tr>
                                <td>Order Category</td>
                                <td>{orderDetails!==""?orderDetails.category:<Skeleton />}</td>
                            </tr>
                            <tr>
                                <td>Order Total Price</td>
                                <td>{orderDetails!==""?orderDetails.original_price:<Skeleton />}</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>{orderDetails!==""?orderDetails.discount:<Skeleton />}</td>
                            </tr>
                            <tr>
                                <td>Payment Gateway</td>
                                <td>{orderDetails!==""?orderDetails.payment_gateway:<Skeleton />}</td>
                            </tr>
                            <tr>
                                <td>Payment Status</td>
                                <td>{orderDetails!==""?orderDetails.payment_status:<Skeleton />}</td>
                            </tr>
                            <tr>
                                <td>Order Date</td>
                                <td>{orderDetails!==""?orderDetails.created_date:<Skeleton />}</td>
                            </tr>
                            <tr>
                                <td>Invoice</td>
                                <td><button className="btn btn-primary btn-sm" onClick={this.handleButtonClick}>Invoice</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 </CollapsePanel>
            </ClientLayout>
        )
    }
}


export default withRouter(OrderDetails);
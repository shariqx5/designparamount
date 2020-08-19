import React from 'react';
import {Link} from 'react-router-dom';

class PendingRow extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                    <td>{this.props.index}</td>
                    <td><Link to={`/client/orders/detail?orderid=${this.props.order.invoice_id}`}>{this.props.order.itemname}</Link></td>
                    <td>{this.props.order.category}</td>
                    <td>{(this.props.order.currency!==null?this.props.order.currency:"$ "+this.props.order.itemprice)}</td>
                    <td>{this.props.order.payment_status}</td>
                    <td>{this.props.order.created_date}</td>
            </tr>
        )
    }
}


export default PendingRow;
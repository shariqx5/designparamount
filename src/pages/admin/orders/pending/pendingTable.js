import React,{Component} from 'react';
import {Table} from '../../../../components';
import PendingRow from './pendingRow';

class PendingTable extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Table heads={this.props.heads}>
                {this.props.orders.length>0?(
                    this.props.orders.map((order,i)=><PendingRow order={order} key={i} index={this.props.offset+i+1}/>)
                ):(
                <tr><td>No Orders Found</td></tr>
                )
                }
            </Table>
        
        )
    }
}


export default PendingTable;
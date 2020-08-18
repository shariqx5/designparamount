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
                <PendingRow />
                <PendingRow />
                <PendingRow />
                <PendingRow />
            </Table>
        
        )
    }
}


export default PendingTable;
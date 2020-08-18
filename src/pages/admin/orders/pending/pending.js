import React,{Component} from 'react';
import PendingContainer from './pendingContainer';

class PendingOrders extends Component{

    state = {
        heads : ["S.No","Order Name","Order Type","Price","Payment Status","Date"]
    }


    componentDidMount(){

    }


    render(){
        return(
            <PendingContainer {...this.state}/>
        )
    }
}


export default PendingOrders;
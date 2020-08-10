import React,{Component} from 'react';
import PricingTable from './pricingTable';

class StandardTable extends Component{
    
    render(){
        return(
            <PricingTable 
            packageName={"Standard"}
            packagePrice={"99"}
            packageTagline={"Great for Solo Entrepreneurs"}
            packageImage={"1.png"}
            url={"standard"}
            />
        )
    }
}


export default StandardTable;
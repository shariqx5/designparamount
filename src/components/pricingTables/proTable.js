import React,{Component} from 'react';
import PricingTable from './pricingTable';

class ProTable extends Component{
    
    render(){
        return(
            <PricingTable 
            packageName={"Pro"}
            packagePrice={"199"}
            packageTagline={"Great for Solo Entrepreneurs"}
            packageImage={"2.png"}
            packageClass={"dark-grey-price"}
            url={"pro"}
            />
        )
    }
}


export default ProTable;
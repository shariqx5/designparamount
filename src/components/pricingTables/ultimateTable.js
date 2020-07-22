import React,{Component} from 'react';
import PricingTable from './pricingTable';

class UltimateTable extends Component{
    
    render(){
        return(
            <PricingTable 
            packageName={"Ultimate"}
            packagePrice={"399"}
            packageTagline={"Great for Solo Entrepreneurs"}
            packageImage={"3.png"}
            packageClass={"utimate-price"}
            />
        )
    }
}


export default UltimateTable;
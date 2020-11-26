import React,{Component} from 'react';
import {URLHelper} from '../../helpers';
import PricingTable from './pricingTable';

const urlHelper = new URLHelper();
class UltimateTable extends Component{
    
    render(){
        return(
            <PricingTable 
            packageName={"Logo Design"}
            packagePrice={"399"}
            packageCurrency = {"USD"}
            packageTagline={"Great for Solo Entrepreneurs"}
            packageImage={"3.png"}
            packageClass={"utimate-price"}
            url={urlHelper.getURL("logo-design")}
            />
        )
    }
}


export default UltimateTable;
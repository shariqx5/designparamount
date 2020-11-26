import React,{Component} from 'react';
import {URLHelper} from '../../helpers';
import PricingTable from './pricingTable';

const urlHelper = new URLHelper();
class ProTable extends Component{
    
    render(){
        return(
            <PricingTable 
            packageName={"Branding"}
            packagePrice={"199"}
            packageCurrency = {"USD"}
            packageTagline={"Great for Solo Entrepreneurs"}
            packageImage={"2.png"}
            packageClass={"dark-grey-price"}
            url={urlHelper.getURL("brand-design")}
            />
        )
    }
}


export default ProTable;
import React,{Component} from 'react';
import {URLHelper} from '../../helpers';
import PricingTable from './pricingTable';

const urlHelper = new URLHelper();
class StandardTable extends Component{
    
    render(){
        return(
            <PricingTable 
            packageName={"Web Design"}
            packagePrice={"99"}
            packageCurrency = {"USD"}
            packageTagline={"Great for Solo Entrepreneurs"}
            packageImage={"1.png"}
            url={urlHelper.getURL("web-design")}
            />
        )
    }
}


export default StandardTable;
import React,{Component} from 'react';
import PricingTabs from './pricingTabs/pricingTabs';
import FAQ from './FAQ';
import {Layout,PricingPlan} from '../../components';

class Pricing extends Component{
    render(){
        return(
            <Layout>
                <PricingTabs />
                <PricingPlan marginBottom = {"100px"}/>
                <FAQ />
            </Layout>
        )
    }
}


export default Pricing;
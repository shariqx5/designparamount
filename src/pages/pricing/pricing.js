import React,{Component} from 'react';
import PricingTabs from './pricingTabs/pricingTabs';
import AddsOn from './addsOn';
import PricingPlan from './pricingPlan';
import FAQ from './FAQ';
import {Layout} from '../../components';
import './pricing.css';

class Pricing extends Component{
    render(){
        return(
            <Layout>
                <PricingTabs />
                <AddsOn />
                <PricingPlan />
                <FAQ />
            </Layout>
        )
    }
}


export default Pricing;
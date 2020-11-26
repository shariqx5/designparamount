import React,{Component} from 'react';
import {Layout,
        StandardJumbotron,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        HelpAction,
        SectionPortfolio,
        SectionPricing,
        SectionWebsite,
        WebDesignTabs
} from '../../components';

class WebDesign extends Component{

    render(){
        return(
            <Layout>
                <StandardJumbotron />
                <SectionWebsite />
                <WebDesignTabs />
                <SectionPortfolio />
                <SectionPricing />
                <HowItWork />
                <ExpensiveDesign/> 
                <Testimonial />
                <HelpAction />
            </Layout>
        )
    }
}


export default WebDesign;
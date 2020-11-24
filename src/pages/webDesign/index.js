import React,{Component} from 'react';
import {Layout,
        StandardJumbotron,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        HelpAction,
        SectionPortfolio,
        SectionPricing
} from '../../components';

class WebDesign extends Component{

    render(){
        return(
            <Layout>
                <StandardJumbotron />
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
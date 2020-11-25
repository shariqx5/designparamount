import React,{Component} from 'react';
import {Layout,
        StandardJumbotron,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        HelpAction,
        SectionPortfolio,
        SectionPricing,
        SectionAbout,
        WebDesignTabs
} from '../../components';

class WebDesign extends Component{

    render(){
        return(
            <Layout>
                <StandardJumbotron />
                <SectionAbout />
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
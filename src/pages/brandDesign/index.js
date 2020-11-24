import React,{Component} from 'react';
import {Layout,
        ProJumbotron,
        Clients,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        MeetDesigners,
        Services,
        PortfolioNavigation,
        Portfolio,
        HelpAction,
        ProDesigner,
        SectionPortfolio,
        SectionPricing
} from '../../components';

class BrandDesign extends Component{

    render(){
        return(
            <Layout>
                <ProJumbotron />
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


export default BrandDesign;
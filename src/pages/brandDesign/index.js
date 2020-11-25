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
        SectionPricing,
        SectionAbout
} from '../../components';

class BrandDesign extends Component{

    render(){
        return(
            <Layout>
                <ProJumbotron />
                <SectionAbout />
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
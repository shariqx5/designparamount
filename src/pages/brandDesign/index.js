import React,{Component} from 'react';
import {Layout,
        ProJumbotron,
        SectionBrand,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        HelpAction,
        SectionPortfolio,
        SectionPricing,
        SectionAbout
} from '../../components';

class BrandDesign extends Component{

    render(){
        return(
            <Layout>
                <ProJumbotron />
                <SectionBrand />
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
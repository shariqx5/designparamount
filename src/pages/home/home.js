import React,{Component} from 'react';
import {Layout,
        HomeJumbotron,
        Clients,
        ExpensiveDesign,
        Testimonial,
        HelpAction,
        SectionPricing,
        SectionPortfolio
    } from '../../components';

class Home extends Component{


    render(){
        
        return(
            <Layout>
                <HomeJumbotron />
                <Clients />
                <ExpensiveDesign />
                <SectionPortfolio />
                <Testimonial />
                <SectionPricing />
                <HelpAction />
            
            </Layout>
        )
    }
}



export default Home;
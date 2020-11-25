import React,{Component} from 'react';
import {Layout,
        UltimateJumbotron,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        SectionPortfolio,
        HelpAction,
        SectionAbout,
        SectionPricing,
        LogoDesignTabs
} from '../../components';

class LogoDesign extends Component{

    componentDidMount(){
        document.body.style.backgroundColor = "#353535";
    }


    componentWillUnmount(){
        document.body.style.backgroundColor = 'white';
    }

    render(){
        return(
            <Layout>
                <UltimateJumbotron />
                <SectionAbout />
                <LogoDesignTabs />
                <SectionPortfolio />
                <SectionPricing />
                {/* <Clients showBlack={true}/> */}
                <HowItWork showBlack={true}/>
                <ExpensiveDesign showBlack={true}/>
                <Testimonial />
                <HelpAction />
            </Layout>
        )
    }
}


export default LogoDesign;
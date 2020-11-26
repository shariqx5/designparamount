import React,{Component} from 'react';
import {Layout,
        UltimateJumbotron,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        SectionPortfolio,
        HelpAction,
        SectionAboutLogo,
        SectionPricing,
        LogoDesignTabs
} from '../../components';

class LogoDesign extends Component{

    componentDidMount(){
        document.body.style.backgroundColor = "#fff";
    }


    componentWillUnmount(){
        document.body.style.backgroundColor = 'white';
    }

    render(){
        return(
            <Layout>
                <UltimateJumbotron />
                <SectionAboutLogo />
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
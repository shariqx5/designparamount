import React,{Component} from 'react';
import {Layout,
        UltimateJumbotron,
        Clients,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        MeetDesigners,
        SectionPortfolio,
        Portfolio,
        HelpAction,
        UltimateDesigner,
        SectionPricing
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
                {/* Intro goes here */}
                <SectionPortfolio />
                <SectionPricing />
                {/* <Clients showBlack={true}/> */}
                <HowItWork showBlack={true}/>
                <ExpensiveDesign showBlack={true}/>
                <Testimonial />
                {/* <MeetDesigners showBlack={true} style='ultimate'/> */}
                
                {/* Book Designer Action Div */}
                {/* <section class="proaddyourdesignersec pt-80">
                    <img src="images/pro/shape1.png" alt="" class="position-absolute"  style={{maxWidth:"200px",left:"-113px", width:"100%",bottom:"270px"}}/>
                    <img src="images/pro/shape1.png" alt="" class="position-absolute" style={{maxWidth:"200px",top:"0px",right:"-85px",width:"100%"}}/>
                    <div class="container">
                        <div class="banner-heading promeetsomeheadingdiv text-center">
                            <h1>Add Your <span>Designer Now</span></h1>
                            <p>Whether you’re just starting out or growing sales into <br />learn from some of our most successful.</p>
                        </div>
                        <UltimateDesigner />
                    </div>
                </section> */}
                <HelpAction />
            </Layout>
        )
    }
}


export default LogoDesign;
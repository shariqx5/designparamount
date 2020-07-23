import React,{Component} from 'react';
import DesignerPortfolio from './designerPortfolio';
import {Layout,
        HireDesignerJumbotron,
        Clients,
        FactsCounter,
        PortfolioNavigation,
        Portfolio,
        Testimonial,
        HowItWork,
        HelpAction} from '../../components';

class HireDesigner extends Component{
    
    render(){
        return(
            <Layout>
                 <HireDesignerJumbotron />
                 <Clients />
                 <FactsCounter />
                 <DesignerPortfolio />
                 <section class="purple-sec portfolio-before-sec">
			        <img src="images/shapes/triangle.png" alt="" class="position-absolute top-0 left-0 triangle-top-left max-width-190" />

                    <div class="container">
                        <div class="section-heading text-center">
                            <h1>Something Creative in His <span>Portfolio</span></h1>
                        </div>
                        <PortfolioNavigation />
                    </div>
		        </section>
                <Portfolio />
                <Testimonial />
                <HowItWork />
                <HelpAction />
            </Layout>
        )
    }
}


export default HireDesigner;
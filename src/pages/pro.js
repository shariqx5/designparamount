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
        ProDesigner
} from '../components';

class Pro extends Component{

    render(){
        return(
            <Layout>
                <ProJumbotron />
                <Clients/>
                <ExpensiveDesign/>
                <HowItWork />
                <Testimonial />
                <MeetDesigners style='pro'/>
                <section className="purple-sec portfolio-before-sec mt-40" id="portfolio">
                    <img src="/images/shapes/triangle.png" alt="" className="position-absolute top-0 left-0 triangle-top-left max-width-190" />
                    <img src="/images/shapes/circle.png" alt="" className="position-absolute top-0 right-0 circle-top-right max-width-190" />

                    <div className="container">
                        <div className="section-heading">
                            <h1>What We Offer<br /> and <span>Portfolio</span></h1>
                        </div>
                        <Services />
                        <PortfolioNavigation />
                    </div>
		        </section>
                <Portfolio />
                {/* Book Designer Action Div */}
                <section class="proaddyourdesignersec pt-80">
                    <img src="images/pro/shape1.png" alt="" class="position-absolute"  style={{maxWidth:"200px",left:"-113px", width:"100%",bottom:"270px"}}/>
                    <img src="images/pro/shape1.png" alt="" class="position-absolute" style={{maxWidth:"200px",top:"0px",right:"-85px",width:"100%"}}/>
                    <div class="container">
                        <div class="banner-heading text-center">
                            <h1>Add Your <span>Designer Now</span></h1>
                            <p>Whether you’re just starting out or growing sales into <br />learn from some of our most successful.</p>
                        </div>
                        <ProDesigner />
                    </div>
                </section>
                <HelpAction />
            </Layout>
        )
    }
}


export default Pro;
import React,{Component} from 'react';
import {Layout,
        StandardJumbotron,
        Clients,
        ExpensiveDesign,
        HowItWork,
        Testimonial,
        MeetDesigners,
        Services,
        PortfolioNavigation,
        Portfolio,
        HelpAction,
        StandardDesigner,
} from '../../components';

class Standard extends Component{

    render(){
        return(
            <Layout>
                <StandardJumbotron />
                <Clients/>
                <ExpensiveDesign/>
                <HowItWork />
                <Testimonial />
                <MeetDesigners style='standard'/>
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
                <section className="proaddyourdesignersec pt-80">
                    <img src="images/pro/shape1.png" alt="" className="position-absolute"  style={{maxWidth:"200px",left:"-113px", width:"100%",bottom:"270px"}}/>
                    <img src="images/pro/shape1.png" alt="" className="position-absolute" style={{maxWidth:"200px",top:"0px",right:"-85px",width:"100%"}}/>
                    <div className="container">
                        <div className="banner-heading text-center">
                            <h1>Add Your <span>Designer Now</span></h1>
                            <p>Whether you’re just starting out or growing sales into <br />learn from some of our most successful.</p>
                        </div>
                        <StandardDesigner />
                    </div>
                </section>
                <HelpAction />
            </Layout>
        )
    }
}


export default Standard;
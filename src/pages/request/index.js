import React,{Component} from 'react';
import {RequestJumbotron,
        Layout,
        Clients,
        HowItWork,
        Services,
        Portfolio,
        StandardDesigner,
        PortfolioNavigation,
        HelpAction,
        PricingPlan
       } from '../../components';

class Request extends Component{

    render(){
        return(
            <Layout>
                <RequestJumbotron />
                <Clients />
                <HowItWork />
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
                <section className="proaddyourdesignersec pt-80">
                <img src="/images/shapes/lines.png" alt="" class="position-absolute" style={{maxWidth:"200px",top:"-25px",left:"-113px",width:"100%"}} />
                <img src="/images/shapes/lines.png" alt="" class="position-absolute" style={{maxWidth:"200px",right:"-85px",bottom:"150px",width:"100%"}} />
                <img src="/images/shapes/orangetriangle.png" alt="" class="position-absolute" style={{maxWidth:"95px",bottom:"100px",left:"-30px",width:"100%"}} />
                <img src="/images/shapes/purple-zigzag.png" alt="" class="position-absolute" style={{maxWidth:"120px",top:"250px",right:"-25px",width:"100%"}} />
                <img src="/images/aboutus/5.png" alt="" class="position-absolute" style={{maxWidth:"65px",top:"125px",left:"301px",width:"100%"}}/>
                <img src="/images/aboutus/3.png" alt="" class="position-absolute mob-none" style={{maxWidth:"95px",top:"-45px",transform:"rotate(-180deg)",right:"250px",width:"100%"}}/>
                    <div className="container">
                        <div className="banner-heading text-center">
                        <h1 style={{marginBottom:"10px"}}>Go Ahead. <span>Try Us Out.</span></h1>
						<p>Whether you’re just starting out or growing sales into <br />learn from some of our most successful.</p>
                        </div>
                        <StandardDesigner />
                    </div>
                </section>
                <PricingPlan />
                <HelpAction />
            </Layout>
        )
    }
}


export default Request;
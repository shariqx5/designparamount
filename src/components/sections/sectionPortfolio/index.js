import React,{Component} from 'react';
import Services from '../../services/services';
import PortfolioNavigation from '../../portfolio/portfolioNavigation';
import Portfolio from '../../portfolio/portfolio';

class SectionPortfolio extends Component{

    render(){
        return(
            <React.Fragment>
                <section className="purple-sec portfolio-before-sec" id="portfolio">
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
            </React.Fragment>
        )
    }
}


export default SectionPortfolio;
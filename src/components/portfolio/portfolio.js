import React,{Component} from 'react';
import LogoDesign from './logoPortfolio';
import WebDesign from './webDesign';
import BusinessCard from './businessCard';
import Stationary from './stationary';
import CarWraps from './carPortfolio';
import Broucher from './brouchersPortfolio';
import TShirts from './tShirtPortfolio';
import BookCover from './bookCoverPortfolio';
import Signage from './signagePortfolio';
import BagDesign from './bagDesignPortfolio';
import {Link} from 'react-router-dom';

const portfolioOptions = {
    0:{
        items:3,
    },
    800:{
        items:5
    },
    1000:{
        items:7
    }
}

class Portfolio extends Component{

    render(){
        return(
            <section class="dark-grey-sec portfolio-sec pt-0 position-rel">
                <img src="/images/shapes/1.png" alt="" class="position-absolute" style={{width:"100%",left:"-10px",zIndex:"2",maxWidth:"85px",top:"-53px"}}/>
                <img src="/images/shapes/2.png" alt="" class="position-absolute" style={{width:"100%",right:"-15px",zIndex:"2",maxWidth:"85px",top:"-90px"}}/>

                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="portolio-up-sec">
                                <div class="tab-content">
                                    <LogoDesign />
                                    <WebDesign />
                                    <BusinessCard />
                                    <Stationary />
                                    <CarWraps />
                                    <Broucher />
                                    <TShirts />
                                    <BookCover />
                                    <Signage />
                                    <BagDesign />
                                </div>
                            </div>
                        </div>
                        <div class="col-12" style={{zIndex:"2"}}>
                            <div class="link-area text-center mt-60 ">
                                <a href="" class="a-link more-padding-lr purple-link"><Link className="white-color" to="/portfolio">See More Work</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Portfolio;
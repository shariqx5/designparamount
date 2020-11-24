import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class CarPortfolio extends Component{

    render(){
		return(
        <div id="car-portfolio" className="tab-pane fade">
    									<div className="row">
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/car/1_jtlEtiw3g4.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/car/1_jtlEtiw3g4.jpg"} lqip={{active:true, quality:20}}/>
														<img src="/images/portfolio/car/1.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/car/2_2-avls9Q5C.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/car/2_2-avls9Q5C.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/car/5_XAmhjBLcB.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/car/5_XAmhjBLcB.jpg"} lqip={{active:true, quality:20}}/>
														<img src="/images/portfolio/car/5.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/car/4_MaGThDOTPZ.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/car/4_MaGThDOTPZ.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/car/3_l-v2-tw4xZ.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/car/3_l-v2-tw4xZ.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    									</div>
    								</div>
		)
    }
}


export default CarPortfolio;
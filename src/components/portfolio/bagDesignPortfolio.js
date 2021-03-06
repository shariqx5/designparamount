import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class BadDesignPortfolio extends Component{

    render(){
        return(
            <div id="bag-design-portfolio" className="tab-pane fade">
    									<div className="row">
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/bag/1.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/bag/1.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/bag/2.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/bag/2.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/bag/3.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/bag/3.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/bag/4_Xgn5SO-4.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/bag/4_Xgn5SO-4.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/bag/5.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/bag/5.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/bag/6.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/bag/6.jpg"} lqip={{active:true, quality:20}}/>
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


export default BadDesignPortfolio;
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
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/bag/1.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/bag/1_FVLkbB8kUf.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/bag/2_GkbVT9ImMd.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/bag/2_GkbVT9ImMd.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/bag/3_qWfwncThB.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/bag/3_qWfwncThB.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/bag/4_Xgn5SO-iTh.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/bag/4_Xgn5SO-iTh.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/bag/5_5IBujBP9j9.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/bag/5_5IBujBP9j9.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/bag/6_0yCtkco9dh.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/bag/6_0yCtkco9dh.jpg"} lqip={{active:true, quality:20}}/>
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
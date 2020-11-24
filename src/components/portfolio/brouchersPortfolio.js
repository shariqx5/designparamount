import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class BroucherPortfolio extends Component{

    render(){
        return(
            <div id="brochure-portfolio" className="tab-pane fade">
    									<div className="row">
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/brochure/1_owgJn_n_fj.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/brochure/1_owgJn_n_fj.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/brochure/2_xjlf_SnTGQ.jpg`} className="portfolio-img">
														<ImageOptimizer path={"/images/portfolio/brochure/2_xjlf_SnTGQ.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/brochure/3_I9wSAA1yoi.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/brochure/3_I9wSAA1yoi.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/brochure/4_7CWC4iw24o.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/brochure/4_7CWC4iw24o.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/brochure/5_uqvn4IGrZ6.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/brochure/5_uqvn4IGrZ6.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/brochure/6_V5wz3YLXw.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/brochure/6_V5wz3YLXw.jpg"} lqip={{active:true, quality:20}}/>
    													 <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/brochure/7_Z1mwOn1ucn.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/brochure/7_Z1mwOn1ucn.jpg"} lqip={{active:true, quality:20}}/>
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



export default BroucherPortfolio;
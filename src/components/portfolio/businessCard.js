import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class BusinessCard extends Component{

    render(){
        return(
            <div id="business-card-portfolio" class="tab-pane fade">
    									<div class="row">
    										<div class="col-md-4">
    											<div class="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/card/1.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/card/1.jpg"} lqip={{active:true, quality:20}}/>
	                                                    <div class="content-details fadeIn-top">
	                                                       <i class="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/card/2.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/card/2.jpg"} lqip={{active:true, quality:20}}/>
														<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/card/5.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/card/5.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/card/6.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/card/6.jpg"} lqip={{active:true, quality:20}}/>
														<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/card/3.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/card/3.jpg"} lqip={{active:true, quality:20}}/>
														<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/card/7.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/card/7.jpg"} lqip={{active:true, quality:20}}/>
    													<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href="/design_gigantic/portfolio/card/9.jpg" class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/card/9.jpg"} lqip={{active:true, quality:20}}/>
    													  <div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    									</div>
    								</div>
        )
    }
}


export default BusinessCard;
import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class Stationary extends Component{
    
    render(){
        return(
            <div id="stationary-portfolio" class="tab-pane fade">
    									<div class="row">
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/stationary/1_j8cXGnJai.jpg`}  class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/stationary/1_j8cXGnJai.jpg"} lqip={{active:true, quality:20}}/>
														<img src="/images/portfolio/stationary/1.webp" alt="" />
                                                        <div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/stationary/2_mE1h4k_x9i.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/stationary/2_mE1h4k_x9i.jpg"} lqip={{active:true, quality:20}}/>
														<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/stationary/4_6WEHoou22.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/stationary/4_6WEHoou22.jpg"} lqip={{active:true, quality:20}}/>
    													<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/stationary/3_ACbWd09B3R.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/stationary/3_ACbWd09B3R.jpg"} lqip={{active:true, quality:20}}/>
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


export default Stationary;
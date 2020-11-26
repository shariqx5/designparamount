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
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/stationary/1.jpg`}  class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/stationary/1.jpg"} lqip={{active:true, quality:20}}/>
2<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/stationary/2.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/stationary/2.jpg"} lqip={{active:true, quality:20}}/>
														<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/stationary/4.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/stationary/4.jpg"} lqip={{active:true, quality:20}}/>
    													<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/stationary/3.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/stationary/3.jpg"} lqip={{active:true, quality:20}}/>
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
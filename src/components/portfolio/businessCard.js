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
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/card/1_XlQiovaD18.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/card/1_XlQiovaD18.jpg"} lqip={{active:true, quality:20}}/>
	                                                    <div class="content-details fadeIn-top">
	                                                       <i class="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/card/2_XXnvyTkYbV.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/card/2_XXnvyTkYbV.jpg"} lqip={{active:true, quality:20}}/>
														<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/card/5_2YAkoM6-Nj.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/card/5_2YAkoM6-Nj.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/card/6_ACZqHMefMR.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/card/6_ACZqHMefMR.jpg"} lqip={{active:true, quality:20}}/>
														<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/card/3_U_RJuv323w.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/card/3_U_RJuv323w.jpg"} lqip={{active:true, quality:20}}/>
														<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div class="col-md-4">
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/card/7_m0NdnTfBjX.jpg`} class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/card/7_m0NdnTfBjX.jpg"} lqip={{active:true, quality:20}}/>
    													<div class="content-details fadeIn-top">
                                                           <i class="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div class="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/card/9_dqJ7g_nz2S.jpg" class="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/card/9_dqJ7g_nz2S.jpg"} lqip={{active:true, quality:20}}/>
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
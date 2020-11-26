import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class LogoPortfolio extends Component{

    render(){
        return(
            <div id="logo-design-portfolio" className="tab-pane active">
										<div className="row">
											<div className="col-md-4">
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/portfolio/logos/2.jpg`} className="portfolio-img">
														<ImageOptimizer path={"/images/portfolio/logos/2.jpg"} lqip={{active:true, quality:20}}/>
	                                                    <div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                    </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/8.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/8.jpg"} lqip={{active:true, quality:20}}/>
	                                                    <div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/9.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/9.jpg"} lqip={{active:true, quality:20}}/>
	                                                    <div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/14.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/14.jpg"} lqip={{active:true, quality:20}}/>
	                                                    <div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/16.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/16.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/17.jpg`} className="portfolio-img">
														<ImageOptimizer path={"/design_gigantic/portfolio/logos/17.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
											</div>
											<div className="col-md-4">
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/4.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/4.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												{/* <div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/logos/4_r5az2omqYy.jpg`} className="portfolio-img">
														<img src="/images/portfolio/logos/4.jpg" alt="" />
	                                                    <div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div> */}
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/5.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/5.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/6.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/6.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/10.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/10.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/11.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/11.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/15.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/15.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/21.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/21.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
											</div>
											<div className="col-md-4">
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/3.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/3.jpg"} lqip={{active:true, quality:20}}/>
														 <div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/1.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/1.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/7.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/7.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/13.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/13.jpg"} lqip={{active:true, quality:20}}/>
	                                                     <div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/19.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/19.jpg"} lqip={{active:true, quality:20}}/>
	                                                    <div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/28.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/28.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
	                                                       <i className="fa fa-search" aria-hidden="true"></i>
	                                                      </div>
													</a>
												</div>
												<div className="mlr--15 content">
													<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/logos/29.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/logos/29.jpg"} lqip={{active:true, quality:20}}/>
														<img src="" alt="" />
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


export default LogoPortfolio;
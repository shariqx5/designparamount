import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class WebDesign extends Component{

    render(){
        return(
            <div id="web-design-portfolio" className="tab-pane fade">
									<div className="row">
										<div className="col-md-4">
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/web/1-1.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/design_gigantic/portfolio/web/1.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/web/2-1.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/design_gigantic/portfolio/web/2.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/web/3-1.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/design_gigantic/portfolio/web/3.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/web/5-1.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/design_gigantic/portfolio/web/5.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/web/4-1.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/design_gigantic/portfolio/web/4.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/web/6-1.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/design_gigantic/portfolio/web/6.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/web/7-1.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/design_gigantic/portfolio/web/7.jpg"} lqip={{active:true, quality:20}}/>
													 <div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/web/8-1.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/design_gigantic/portfolio/web/8.jpg"} lqip={{active:true, quality:20}}/>
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


export default WebDesign;
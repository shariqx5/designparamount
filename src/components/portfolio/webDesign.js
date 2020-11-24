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
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/web/1-1_O6qXE5N0T.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/images/portfolio/web/1_sxmMmKEQls.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/web/2-1_Wwg34Ad0L.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/images/portfolio/web/2_owP-TNQ0P4.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/web/3-1_nw_jTfeD-8.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/images/portfolio/web/3__TxaDSopLy.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/web/5-1_TjFyS4fQ3J.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/images/portfolio/web/5_RsEAyEdYj.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/web/4-1_AVD9L9MjR.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/images/portfolio/web/4_xOm76LjOVR.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/web/6-1_x93P8nTUj.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/images/portfolio/web/6_AhpPtPuc74.jpg"} lqip={{active:true, quality:20}}/>
													<div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/web/7-1_iu8mBw2vb8.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/images/portfolio/web/7_sdJ1DEC0V-.jpg"} lqip={{active:true, quality:20}}/>
													<img src="/images/portfolio/web/7.jpg" alt="" />
                                                     <div className="content-details fadeIn-top">
                                                       <i className="fa fa-search" aria-hidden="true"></i>
                                                      </div>
												</a>
											</div>
											<div className="mlr--15 content">
												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/web/8-1_AsLoBIEBjt.jpg`} className="portfolio-img">
												<ImageOptimizer path={"/images/portfolio/web/7_sdJ1DEC0V-.jpg"} lqip={{active:true, quality:20}}/>
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
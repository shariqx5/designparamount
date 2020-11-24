import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class BookCoverPortfolio extends Component{

    render(){
        return(
            <div id="book-covers-portfolio" className="tab-pane fade">
    									<div className="row">
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/book-cover/1_4SPh8vuOXA.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/book-cover/1_4SPh8vuOXA.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/book-cover/6_JJARSByeUk.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/book-cover/6_JJARSByeUk.jpg"} lqip={{active:true, quality:20}}/>
    													<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                        </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/book-cover/7_13Fni4mIKn.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/book-cover/7_13Fni4mIKn.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/book-cover/3_00o6E7sdK.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/book-cover/3_00o6E7sdK.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/book-cover/4_AwWNb-Avub.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/book-cover/4_AwWNb-Avub.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											{/* <div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/book-cover/5.jpg" className="portfolio-img">
    													<img src="/images/portfolio/book-cover/5.jpg" alt="" />
                                                         <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/book-cover/1.jpg" className="portfolio-img">
    													<img src="/images/portfolio/book-cover/1.jpg" alt="" />
                                                         <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div> */}
    										</div>
    									</div>
    								</div>
        )
    }
}


export default BookCoverPortfolio;
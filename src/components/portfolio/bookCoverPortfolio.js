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
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/book-cover/1.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/book-cover/1.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/book-cover/6.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/book-cover/6.jpg"} lqip={{active:true, quality:20}}/>
    													<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                        </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/book-cover/7.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/book-cover/7.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/book-cover/3.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/book-cover/3.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/design_gigantic/portfolio/book-cover/4.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/design_gigantic/portfolio/book-cover/4.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											{/* <div className="mlr--15 content">
    												<a data-fancybox="images" href="/design_gigantic/portfolio/book-cover/5.jpg" className="portfolio-img">
    													<img src="/design_gigantic/portfolio/book-cover/5.jpg" alt="" />
                                                         <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/design_gigantic/portfolio/book-cover/1.jpg" className="portfolio-img">
    													<img src="/design_gigantic/portfolio/book-cover/1.jpg" alt="" />
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
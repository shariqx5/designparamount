import React,{Component} from 'react';

class CarPortfolio extends Component{

    render(){
		return(
        <div id="car-portfolio" className="tab-pane fade">
    									<div className="row">
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/car/1.jpg" className="portfolio-img">
    													<img src="/images/portfolio/car/1.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/car/2.jpg" className="portfolio-img">
    													<img src="/images/portfolio/car/2.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/car/5.jpg" className="portfolio-img">
    													<img src="/images/portfolio/car/5.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/car/4.jpg" className="portfolio-img">
    													<img src="/images/portfolio/car/4.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/car/3.jpg" className="portfolio-img">
    													<img src="/images/portfolio/car/3.jpg" alt="" />
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


export default CarPortfolio;
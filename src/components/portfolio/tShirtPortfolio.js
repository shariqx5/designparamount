import React,{Component} from 'react';

class TShirtPortfolio extends Component{

    render(){
        return(
            <div id="t-shirts-portfolio" className="tab-pane fade">
    									<div className="row">
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/shirt/1.jpg" className="portfolio-img">
    													<img src="/images/portfolio/shirt/1.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/shirt/5.jpg" className="portfolio-img">
    													<img src="/images/portfolio/shirt/5.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/shirt/2.jpg" className="portfolio-img">
    													<img src="/images/portfolio/shirt/2.jpg" alt="" />
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href="/images/portfolio/shirt/6.jpg" className="portfolio-img">
    													<img src="/images/portfolio/shirt/6.jpg" alt="" />
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


export default TShirtPortfolio;
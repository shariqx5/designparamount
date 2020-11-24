import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class TShirtPortfolio extends Component{

    render(){
        return(
            <div id="t-shirts-portfolio" className="tab-pane fade">
    									<div className="row">
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/shirt/1_fAvCOFHEkk.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/shirt/1_fAvCOFHEkk.jpg"} lqip={{active:true, quality:20}}/>
														<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/shirt/5_poNRGXuDd2.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/shirt/5_poNRGXuDd2.jpg"} lqip={{active:true, quality:20}}/>
    													<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/shirt/2_Aw4RQG_bP.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/shirt/2_Aw4RQG_bP.jpg"} lqip={{active:true, quality:20}}/>
    													<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/shirt/6_AI8EZE5GSY.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/shirt/6_AI8EZE5GSY.jpg"} lqip={{active:true, quality:20}}/>
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
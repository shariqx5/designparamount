import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class Signage extends Component{

    render(){
        return(
            <div id="signage-portfolio" className="tab-pane fade">
    									<div className="row">
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/signage/1_W_2g8limWK.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/signage/1_W_2g8limWK.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/signage/2_m8Xel_fxO.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/signage/2_m8Xel_fxO.jpg"} lqip={{active:true, quality:20}}/>
    													<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/signage/4_HwYdgdubD.jpg`} className="portfolio-img">
    													<ImageOptimizer path={"/images/portfolio/signage/4_HwYdgdubD.jpg"} lqip={{active:true, quality:20}}/>
                                                        <div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/signage/3_mzhg7NzSQc.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/signage/3_mzhg7NzSQc.jpg"} lqip={{active:true, quality:20}}/>
    													<div className="content-details fadeIn-top">
                                                           <i className="fa fa-search" aria-hidden="true"></i>
                                                          </div>
    												</a>
    											</div>
    										</div>
    										<div className="col-md-4">
    											<div className="mlr--15 content">
    												<a data-fancybox="images" href={`${IMAGE_SERVER_ADDRESS}/images/portfolio/signage/5_O03IM391QL.jpg`} className="portfolio-img">
													<ImageOptimizer path={"/images/portfolio/signage/5_O03IM391QL.jpg"} lqip={{active:true, quality:20}}/>
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


export default Signage;
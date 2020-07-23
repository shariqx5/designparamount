import React,{Component} from 'react';

class HowCanWeHelp extends Component{

    render(){
        return(
            <section className="white-sectionsa position-rel">
                <img src="images/shapes/lines.png" alt="" className="position-absolute max-width-190" style={{transform:"rotate(182deg)",left:'-110px',top:'65px'}} />
                <img src="images/shapes/circle.png" alt="" className="position-absolute max-width-190" style={{transform:"rotate(182deg)",bottom:'100px',right:'-121px'}}/>
        <div className="container">
            <div className="section-heading mb-80 text-center">
						<h1>How Can We <span>Help?</span></h1>
					</div>
            <div className="row">
                
                <div className="col-md-6">
                    <div className="section-heading mb-80">
						<h1>Still Have Questions? <span>Relax. The Gauge has<br /> Your back.</span></h1>
                        <p>Feel free to email us or give us a ring at any time. You can also reach us through our Live
                        Chat feature for queries, orders, and suggestions!</p>
                        <div className="contacticon" style={{paddingTop:"20px"}}>
                            <i className="fa fa-map-marker"></i>
                            <span>&nbsp; 3 E Evergreen Road # 1009, New City, NY 10956</span>
                        </div>
                        <div className="contacticon" style={{paddingTop:"15px"}}>
                            <i className="fas fa-paper-plane"></i>
                            <span>info@designparamount.com</span>
                        </div>
                        <div className="contacticon" style={{paddingTop:"15px"}}>
                            <i className="fas fa-phone-alt"></i>
                            <span>585 252 2266</span>
                        </div>
					</div>
                </div>
                <div className="col-md-6">
                    
                         <div className="col-xs-12">
                            <ul className="nav nav-tabs pricingtab" role="tablist">
                              <li className="nav-item">
                                <a className="nav-link active" href="#learnmore" role="tab" data-toggle="tab">Learn More</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#needsupport" role="tab" data-toggle="tab">Need Support</a>
                              </li>
                            </ul>
                        
                        <div className="tab-content pricingtabcontent">
                          <div role="tabpanel" className="tab-pane fade in active show" id="learnmore">
                                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card cardcommonforheading chatwithuscard">
                          <div className="card-body">
                            <h5 className="card-title">Chat with <span>Us</span></h5>
                            <p className="card-text">Our enthusiastic team will be glad to answer any query or concern that you may have.</p>
                              <div className="link-area">
                                <a href="#" className="a-link purple-link">Live Chat</a>
                              </div>
                          </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card cardcommonforheading requestdemocard">
                      <div className="card-body">
                        <h5 className="card-title">Request <span>Demo</span></h5>
                        <p className="card-text">Request a demo to get a better understanding of our design skills.</p>
                          <div className="link-area">
							<a href="request.html" className="a-link purple-link">Demo</a>
						  </div>
                      </div>
                    </div>
                        </div>
                        
                    
                    </div>
        
                        </div>
                          <div role="tabpanel" className="tab-pane fade" id="needsupport">
                                
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card cardcommonforheading chatwithuscard">
                          <div className="card-body">
                            <h5 className="card-title">Chat with <span>Us</span></h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                              <div className="link-area">
                                <a href="#" className="a-link purple-link">Live Chat</a>
                              </div>
                          </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card cardcommonforheading requestdemocard">
                      <div className="card-body">
                        <h5 className="card-title">Request <span>Demo</span></h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                          <div className="link-area">
							<a href="request.html" className="a-link purple-link">Demo</a>
						  </div>
                      </div>
                    </div>
                        </div>
                        
                    
                    </div>
    
                            </div>
                        </div>
			</div>
                    
                </div>
                
            </div>
        </div>
    </section>
        )
    }
}


export default HowCanWeHelp;
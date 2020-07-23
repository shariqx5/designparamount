import React,{Component} from 'react';
import Monthly from './monthly/monthly';
import Quarterly from './quarterly/quarterly';
import Anually from './anually/anually';

class PricingTabs extends Component{

    render(){
        return(
            <section className="white-section pricingtabsec position-rel">
				<img src="images/shapes/circle.png" alt="" className="position-absolute" style={{maxWidth:"190px",bottom:"290px",right:"-115px",width:"100%"}}/>
				<img src="images/shapes/lines.png" alt="" className="position-absolute" style={{maxWidth:"190px",left:"-90px",bottom:"457px",width:"100%"}}/>
				<img src="images/standard/purple-zigzag.png" alt=""  className="position-absolute" style={{maxWidth:"110px",left:"15px",zIndex:"2",top:"575px",width:"100%"}}/>
				<img src="images/standard/orange.png" alt=""  className="position-absolute" style={{maxWidth:"95px",right:"210px",zIndex:"1",top:"150px",width:"100%"}}/>
				<img src="images/shapes/pentagon.png" alt=""  className="position-absolute" style={{maxWidth:"85px",left:"250px",zIndex:"1",top:"186px",width:"100%"}}/>
				<img src="images/shapes/pinkcircle.png" alt=""  className="position-absolute" style={{maxWidth:"95px",right:"-30px",zIndex:"1",top:"425px",transform:"rotate(40deg)",width:"100%"}}/>
				<img src="images/standard/yellow.png" alt=""  className="position-absolute"  style={{maxWidth:"102px",left:"-30px",zIndex:"2",top:"140px",width:"100%"}}/>
	        
	        	<div className="pricingbannercolor"></div>
				<div className="home-banner-bg position-absolute header-distance">
						{/* <!--<img src="images/home/banner-bg/1.png" alt="" / id="home-banner-bg-1">--> */}
						<img src="images/home/banner-bg/2.png" alt=""  id="home-banner-bg-2" />
						<img src="images/home/banner-bg/3.png" alt=""  id="home-banner-bg-3" />
						<img src="images/home/banner-bg/4.png" alt=""  id="home-banner-bg-4" />
						<img src="images/home/banner-bg/5.png" alt=""  id="home-banner-bg-5" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-heading text-center">
								<h1>Find the <span>Perfect Plan</span> <br />For All <span>Scale</span> Of Business</h1>
								<p>All design gauge plans include unlimited request <br />and are backed  by a 100% satisfaction guarantee.</p>
							</div>
							
							<div className="col-xs-12 three-pricing-sec ">
									<ul className="nav nav-tabs pricingtab" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" href="#monthly" role="tab" data-toggle="tab">Monthly</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#quarterly" role="tab" data-toggle="tab">Quarterly</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#annually" role="tab" data-toggle="tab">Annually</a>
									</li>
									</ul>
								
									<div className="tab-content pricingtabcontent">
										<Monthly />
										<Quarterly />
										<Anually />
									</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        )
    }
}


export default PricingTabs;
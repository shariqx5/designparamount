import React,{Component} from 'react';

class PricingPlan extends Component{

    render(){
        return(
            <section className="pricingplaninfosec position-rel">
	        <img src="images/shapes/4.png" alt="" className="position-absolute" style={{maxWidth:"100px",left:"-30px",bottom:"-77px",transform:"rotate(-30deg)",width:"100%"}}/>
	        <img src="images/shapes/3.png" alt="" className="position-absolute" style={{maxWidth:"100px",right:"-31px",top:"-80px",width:"100%"}}/>
	        <div className="container">
	            <div className="row justify-content-center">
	                    <h1 className="text-white text-center" style={{fontWeight:"700px"}}>All Pricing Plan <br />That <span style={{color:"black"}}>Include</span></h1>
	            </div><br />
	            <div className="row pricingplanrow">
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon1.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">Logo Design</h1>
								<p className="text-white">A smart logo means an impressed audience, that converts into a customer quite sooner.</p>
							</div>
						</div>
	                </div>
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon2.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">Unlimited Revisions</h1>
								<p className="text-white">You want everything perfect, we make sure that’s exactly what happens. Get as many revisions as you want.</p>
							</div>
						</div>
	                </div>
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon3.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">A Dedicated Designer</h1>
								<p className="text-white">Your allocated designer stays with you from start to completion of the project until you're satisfied.</p>
							</div>
						</div>
	                </div>
	            </div>
	            <div className="row pricingplanrow">
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon4.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">Fast Turnaround Time</h1>
								<p className="text-white">Place an order and get ready to get your work delivered faster than your expectations.</p>
							</div>
						</div>
	                </div>
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon5.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">Free Access to Stock Photo</h1>
								<p className="text-white">Saw a stock photo you want to be added to your design? Tell us and we’ll get it for you.</p>
							</div>
						</div>
	                </div>
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon6.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">Source File Included</h1>
								<p className="text-white">You get all the source files in HD quality with all the copyrights to use it as you want for your brand.</p>
							</div>
						</div>
	                </div>
	            </div>
	            <div className="row">
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon7.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">24/7 Live Support</h1>
								<p className="text-white">Do you want an artwork immediately? We are always here to help you out of every design emergency!</p>
							</div>
						</div>
	                </div>
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon8.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">Satisfaction Guarentee</h1>
								<p className="text-white">Your satisfaction is our main goal. We do not believe in letting our customers leave with their projects half happy.</p>
							</div>
						</div>
	                </div>
	                <div className="col-md-4">
	                   <div className="single-service">
							<div className="single-service-img">
								<img src="images/pricing/icon9.png" alt="" />
							</div>
							<div className="single-service-detail">
								<h1 className="text-white">100% Unique Design</h1>
								<p className="text-white">Our passionate designers believe in the in-depth process going through brainstorming.</p>
							</div>
						</div>
	                </div>
	            </div>
	        </div>
	    </section>
    
        )
    }
}

export default PricingPlan;
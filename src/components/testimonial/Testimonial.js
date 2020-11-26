import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ImageOptimizer from '../imageOptimizer';

class Testimonial extends Component{

    render(){
        return(
            <section className="purple-sec case-study-sec position-rel" style={{paddingBottom:"50px",paddingTop:"100px"}}>
			<div className="case-study-bg position-absolute top-0 right-0 height-full">
				<ImageOptimizer path={"/design_gigantic/testimonial/bg/1.jpg"} lqip={{active:true, quality:20}}/>
				<ImageOptimizer path={"/design_gigantic/testimonial/bg/2.jpg"} lqip={{active:true, quality:20}}/>
				<ImageOptimizer path={"/design_gigantic/testimonial/bg/3.jpg"} lqip={{active:true, quality:20}}/>
				<ImageOptimizer path={"/design_gigantic/testimonial/bg/4.jpg"} lqip={{active:true, quality:20}}/>
			</div>
			<div className="container-fluid position-absolute height-full testcontentsec">
				<div className="row height-full">
					<div className="col-md-7">
						<div className="row height-full">
							<div className="col-md-6">
								<div className="testimonial-float-img height-full">
									<img src="/images/testimonials/clients/1.png" alt="" className="first-img" />
									<img src="/images/testimonials/clients/2.png" alt="" className="second-img" />
									<img src="/images/testimonials/clients/3.png" alt="" className="third-img" />
									<img src="/images/testimonials/clients/4.png" alt="" className="forth-img" />
									<img src="/images/testimonials/clients/5.png" alt="" className="fifth-img" />
									<img src="/images/testimonials/clients/6.png" alt="" className="sixth-img" />
								</div>
							</div>
							<div className="col-md-5">
								<div className="testimonial-bubble-area">
									<div className="testimonial-bubble">
										<div className="testimonial-bubble-img">
										 	<ImageOptimizer path={"/design_gigantic/testimonial/1.jpg"} lqip={{active:true, quality:20}}/>
										</div>
										<div className="textimonial-bubble-detail">
											<p className="textimonial-bubble-name">Ellen Parker, <span>Hifived</span></p>
											<p className="textimonial-bubble-say">“Design Paramount knows how to hit the bull’s eye!</p>
											<div className="testimonial-bubble-stars">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
										</div>
									</div>
									<div className="testimonial-bubble">
										<div className="testimonial-bubble-img">
											<ImageOptimizer path={"/design_gigantic/testimonial/2.jpg"} lqip={{active:true, quality:20}}/>
										</div>
										<div className="textimonial-bubble-detail">
											<p className="textimonial-bubble-name">Bertha Miller, <span>Sudaen</span></p>
											<p className="textimonial-bubble-say">“I am so impressed with the communication...</p>
											<div className="testimonial-bubble-stars">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
										</div>
									</div>
									<div className="testimonial-bubble">
										<div className="testimonial-bubble-img">
											<ImageOptimizer path={"/design_gigantic/testimonial/3.jpg"} lqip={{active:true, quality:20}}/>
										</div>
										<div className="textimonial-bubble-detail">
											<p className="textimonial-bubble-name">Amasu Brown, <span>Socktech</span></p>
											<p className="textimonial-bubble-say">“Electric appliance companies are difficult to...</p>
											<div className="testimonial-bubble-stars">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-5 offset-md-7">
						<div className="section-heading">
							<h1 className="default-heading"><span>Gage Us With The</span> Word Of Mouth We Gather!</h1>
							<p>Design Gigantic, a logo design company, is essentially an institution where simple ideas are converted into brilliant and passionate designs. We take pride in creating design schemes for our clients that reflect their business, making our work unique in all of the industry. Based in the US, we are the 'Go-To' digital marketing and design consultancy for those who want nothing but the best.</p>
						</div>
						<Link to="/case-study" className="thick-link">Explore More Case Studies <i className="fas fa-long-arrow-alt-right"></i></Link>
					</div>
				</div>
			</div>
		</section>
        )
    }
}


export default Testimonial;
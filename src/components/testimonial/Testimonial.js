import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Testimonial extends Component{

    render(){
        return(
            <section className="purple-sec case-study-sec position-rel" style={{paddingBottom:"50px"}}>
			<div className="case-study-bg position-absolute top-0 right-0 height-full">
				<img src="/images/testimonials/bg/1.png" alt="" id="case-study-bg-1" />
				<img src="/images/testimonials/bg/2.png" alt="" id="case-study-bg-2" />
				<img src="/images/testimonials/bg/3.png" alt="" id="case-study-bg-3" />
				<img src="/images/testimonials/bg/4.png" alt="" id="case-study-bg-4" />
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
											<img src="/images/testimonials/bubbles/1.jpg" alt="" />
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
											<img src="/mages/testimonials/bubbles/2.jpg" alt="" />
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
											<img src="/images/testimonials/bubbles/3.jpg" alt="" />
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
							<h1 className="default-heading"><span>We Walk The Walk,</span> But Our Customers Talk The Talk</h1>
							<p>Whether you have considered hiring an in house designer, tried to manage a freelancer, or even worked with one of those “other design sites,” we know it sucks. Design Paramount is all about making your life easier. AKA not suck. All for one flat rate.</p>
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
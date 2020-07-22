import React,{Component} from 'react';

class ExpensiveDesign extends Component{

	constructor(props){
		super(props);
	}

    render(){
        return(
            <section className={this.props.showBlack?"fixed-scroll-sec position-rel":"fixed-scroll-sec"}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-7">
						<div className="fixed-scroll-area">
							<div className={this.props.showBlack?"section-heading proservicediv":"section-heading"}>
								<h1>Design is Expensive and Time Consuming. <span>It Doesn’t Have to Be.</span></h1>
								        <p>The cost of getting a great design shouldn’t be as high as they say. And it most certainly shouldn’t be your peace of mind or brand image. Our designers make sure the designs they create for you to bring you more value than the price you pay for it.</p>
							</div>
							<div className={this.props.showBlack?"fixed-scroll-area-link proserviceuldiv":"fixed-scroll-area-link"}>
								<ul> 
									<li><a href="#first-fixed" className="active"><span>01</span>A Dedicated, Professional Designer</a></li>
									<li><a href="#second-fixed"><span>02</span>Unlimited Requests and Revisions</a></li>
									<li><a href="#third-fixed"><span>03</span>Ridiculously Fast Turnarounds</a></li>
									<li><a href="#forth-fixed"><span>04</span>Easy and Streamlined Communication</a></li>
									<li><a href="#fifth-fixed"><span>05</span>World className Customer Support</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className={this.props.showBlack?"col-lg-6 col-md-5 proservicecontentdiv":"col-lg-6 col-md-5"}>
						<div className="fixed-right-item" id="first-fixed">
							<img src="/images/home/fixed-section/1.png" alt="" />
							<h5>A Dedicated, Professional Designer</h5>
							<p>We have carefully developed a team of professionals that understand your requirements
                                without breaking your brain.</p>
						</div>
						<div className="fixed-right-item" id="second-fixed">
							<img src="/images/home/fixed-section/2.png" alt="" />
							<h5>Unlimited Requests and Revisions</h5>
							<p>Our creative juices never dry up. The designs we create are meant to inspire your audience
                                in a way that they remember your content and brand with loyalty.</p>
						</div>
						<div className="fixed-right-item" id="third-fixed">
							<img src="/images/home/fixed-section/3.png" alt="" />
							<h5>Ridiculously Fast Turnarounds</h5>
							<p>Staying updated with the trends and modern design elements helps us bring you ideas that
                                resonate with your customers, winning you great recognition.</p>
						</div>
						<div className="fixed-right-item" id="forth-fixed">
							<img src="/images/home/fixed-section/4.png" alt="" />
							<h5>Easy and Streamlined Communication</h5>
							<p>We invest a great deal of time in understanding your brand to create the content that enhances its image and supports growth in the right direction.</p>
						</div>
						<div className="fixed-right-item" id="fifth-fixed">
							<img src="/images/home/fixed-section/5.png" alt="" />
							<h5>World className Customer Support</h5>
							<p>Our budget-friendly packages backed by a professional and creative team helps deliver
                                more value for your brand within reasonable costs.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}

export default ExpensiveDesign;
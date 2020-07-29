import React,{Component} from 'react';

class HelpAction extends Component{

    render(){
        return(
            <section className="light-grey-sec position-rel">
			<img src="/images/shapes/triangle.png" alt="" className="position-absolute top-0 left-0 triangle-top-left max-width-190" />
			<img src="/images/shapes/circle.png" alt="" className="position-absolute top-0 right-0 circle-top-right max-width-190" />

			<div className="container position-absolute top-0 height-full horizontal-center">
				<div className="row height-full">
					<div className="col-lg-6 col-md-6 offset-md-6">
						<img src="/images/small-sections/1.png" alt="" className="panda-float-img" />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="section-heading mb-40">
							<h1>More Questions? <br /><span>That's Okay. We're<br /> Happy To Help!</span></h1>
						</div>
						<div className="link-area">
							<a href="#" className="a-link more-padding-lr purple-link">Live Chat</a>
							<a href="contact.html" className="a-link more-padding-lr">Contact Us</a>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}


export default HelpAction;
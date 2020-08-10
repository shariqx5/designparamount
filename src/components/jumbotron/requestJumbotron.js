import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class RequestJumbotron extends Component{

    render(){
        return(
            <section className="home-banner requestmainbannersec" style={{backgroundImage:"/images/request/bg.jpg",backgroundRepeat:"no-repeat",backgroundPositionX:"center",backgroundPositionY:"center",backgroundSize:"cover"}}>
            <img src="/images/shapes/orangesquare.png" alt="" className="position-absolute" style={{width:"100%",left:"-20px",zIndex:"2",maxWidth:"70px",top:"250px"}}/>
            <img src="/images/shapes/orangetriangle.png" alt="" className="position-absolute" style={{width:"100%",bottom:"-3px",left:"400px",zIndex:"2",maxWidth:"85px"}}/>
            <img src="/images/standard/purple-zigzag.png" alt="" className="position-absolute" style={{width:"100%",right:"200px",bottom:"-58px",zIndex:"2",maxWidth:"130px"}}/>
            <img src="/images/aboutus/3.png" alt="" className="position-absolute" style={{width:"100%",top:"280px",right:"-45px",zIndex:"2",maxWidth:"85px"}}/>
        
		<div className="container banner-center">
			<div className="row">
				<div className="col-md-6 promaincoldiv">
					<div className="banner-heading propageheadingdiv">
                        <h1>Single Design <span>Request</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
					</div>
					   <div className="link-area">
							<a href="#" className="a-link purple-link"><Link className="white-color" to="/pricing">Create a Design</Link></a>
						</div>
				</div>
                <div className="col-md-6 requestbannersideimg text-center">
                    <img src="/images/request/banner.png" />
                </div>
			</div>
		</div>
	</section>
        )
    }
}


export default RequestJumbotron;
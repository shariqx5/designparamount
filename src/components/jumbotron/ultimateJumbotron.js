import React,{Component} from 'react';
import ImageOptimizer from '../imageOptimizer';
import {Link} from 'react-router-dom';

class UltimateJumbotron extends Component{

    render(){
        return(
            <section className="home-banner" style={{backgroundImage:"images/pro/bg.jpg",backgroundRepeat:"no-repeat",backgroundPositionX:"center",backgroundPositionY:"center",backgroundColor:"#292728"}}>
        {/* <!--<div className="home-banner-bg position-absolute header-distance">
				<img src="images/home/banner-bg/2.png" alt="" id="home-banner-bg-2">
				<img src="images/home/banner-bg/3.png" alt="" id="home-banner-bg-3">
				<img src="images/home/banner-bg/4.png" alt="" id="home-banner-bg-4">
				<img src="images/home/banner-bg/5.png" alt="" id="home-banner-bg-5">
			</div>--> */}
        <img src="images/standard/orange.png" alt="" className="position-absolute" style={{width:"100%",left:"-30%",zIndex:"2",maxWidth:"85px",top:"130px"}}/>
        <img src="images/standard/purple-zigzag.png" alt="" className="position-absolute"  style={{width:"100%",left:"68px",zIndex:"2",maxWidth:"130px",bottom:"-58px"}}/>
        <img src="images/standard/yellow.png" alt="" className="position-absolute" style={{width:"100%",right:"-30px",zIndex:"2",maxWidth:"102px",bottom:"200px"}}/>
        <div className="container banner-center">
			<div className="row">
				<div className="col-md-5 promaincoldiv">
					<div className="banner-heading standardbannerheadingdiv propageheadingdiv">
                        <h5 style={{position:"relative"}}><img src="images/pricing/service/2.png" alt="" className="position-absolute" style={{left:"-5px",zIndex:"2",maxWidth:"50px",top:"-13px"}}/> Logo Design</h5>
						<h1 style={{color:"#5e42d3"}}>Logo Designs with Ravishing Pixels.</h1>
                        <h1><span>Simple. Scalable. Reliable.</span></h1>
						<p>No HR. No interviews. No drama. In a few clicks you’ll have access to a professional designer ready to jump into your creative ecosystem.</p>
					</div>
					<div className="bannerbtnwhitediv probannerbtn">
						<a href="#" className="a-link purple-link pricing"><Link className="white-color" to="/pricing">See Pricing</Link></a>
						<a href="#" className="a-link watchvideo">Watch The Video</a>
					</div>
				</div>
                <div className="col-md-7 propagebannerimg">
					<ImageOptimizer path={"design_gigantic/banners/logo_banner.png"} lqip={{active:true, quality:20}}/>
                </div>
			</div>
		</div>
		
	</section>
        )
    }
}


export default UltimateJumbotron;
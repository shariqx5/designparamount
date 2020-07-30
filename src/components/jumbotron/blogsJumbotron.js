import React,{Component} from 'react';

class BlogsJumbotron extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <section className="inner-banner small-inner-banner purple-banner position-rel" style={{backgroundImage:"images/blog/blogbaner.jpg",backgroundRepeat:"no-repeat",backgroundPositionX:"center",backgroundPositionY:"center",backgroundSize:"cover",minHeight:"480px"}}>
            <img src="/images/shapes/yellowsquare.png" alt="" className="position-absolute" style={{left:"240px",zIndex:"2",maxWidth:"80px",top:"145px"}}/>
            <img src="/images/shapes/orangetriangle.png" alt="" className="position-absolute" style={{width:"100%",zIndex:"2",right:"240px",maxWidth:"85px",top:"145px"}}/>
            <img src="/images/shapes/pinkcircle.png" alt="" className="position-absolute" style={{width:"100%",bottom:"-5px",transform:"rotate(45deg)",zIndex:"2",right:"-5px",maxWidth:"85px"}}/>
            <img src="/images/shapes/purple-zigzag.png" alt="" className="position-absolute" style={{width:"100%",bottom:"-60px",left:"18px",zIndex:"2",maxWidth:"130px"}}/>
			{/* <!--<div className="inner-banner-bg position-absolute header-distance">
				<img src="images/home/banner-bg/1.png" alt="" id="home-banner-bg-1">
				<img src="images/home/banner-bg/2.png" alt="" id="home-banner-bg-2">
				<img src="images/home/banner-bg/3.png" alt="" id="home-banner-bg-3">
				<img src="images/home/banner-bg/4.png" alt="" id="home-banner-bg-4">
				<img src="images/home/banner-bg/5.png" alt="" id="home-banner-bg-5">
			</div>--> */}
			<div className="container banner-center">
				<div className="row">
					<div className="col-12 text-center">
						<div className="banner-heading">
							<h1>Find The <span>Perfect Plan</span><br /> For All <span>Scale</span> Of Businesses</h1>
							<p>All Design Gauge plans include unlimited requests<br /> and are backed by a 100% satisfaction guarantee.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}


export default BlogsJumbotron;
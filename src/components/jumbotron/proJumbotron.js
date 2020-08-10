import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ProJumbotron extends Component{

    render(){
        return(
            <section className="home-banner" style={{background:"#5e42d3"}}>
            {/* <!--<div className="home-banner-bg position-absolute header-distance">
                    <img src="images/home/banner-bg/2.png" alt="" id="home-banner-bg-2">
                    <img src="images/home/banner-bg/3.png" alt="" id="home-banner-bg-3">
                    <img src="images/home/banner-bg/4.png" alt="" id="home-banner-bg-4">
                    <img src="images/home/banner-bg/5.png" alt="" id="home-banner-bg-5">
                </div>--> */}
            <img src="images/standard/orange.png" alt="" className="position-absolute" style={{width:"100%",left:"-30px",zIndex:"2",maxWidth:"85px",top:"130px"}}/>
            <img src="images/standard/purple-zigzag.png" alt="" className="position-absolute"  style={{width:"100%",left:"68px",zIndex:"2",maxWidth:"130px",bottom:"-158px"}}/>
            <img src="images/standard/yellow.png" alt="" className="position-absolute"  style={{width:"100%",right:"-30px",zIndex:"2",maxWidth:"102px",bottom:"200px"}}/>
            
            <div className="container banner-center">
                <div className="row">
                    <div className="col-md-5">
                        <div className="banner-heading standardbannerheadingdiv">
                            <h6 style={{position:"relative"}}><img src="images/standard/circle.png" alt="" className="position-absolute" style={{left:"-5px",zIndex:"2",maxWidth:"60px",top:"-18px"}}/> Standard</h6>
                            <h1>A New Approach to Graphic Design.</h1>
                            <h1><span>Simple. Scalable. Reliable.</span></h1>
                            <p>Modern branding designs that set your business apart from your competitors. Our professional designers add their creative juices to concoct a brand recipe that makes your business shine in the market.</p>
                        </div>
                        <div className="bannerbtnwhitediv">
                            <a href="#" className="a-link purple-link pricing"><Link className="purple-color" to="/pricing">See Pricing</Link></a>
                            <a href="#" className="a-link watchvideo">Watch The Video</a>
                        </div>
                    </div>
                    <div className="col-md-7 standardpagemainbannerimg">
                        <img src="images/standard/main-shape.png" />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}


export default ProJumbotron;
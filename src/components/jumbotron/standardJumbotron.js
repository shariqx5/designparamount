import React,{Component} from 'react';
import './standardJumbotron.css';

class StandardJumbotron extends Component{

    render(){
        return(
            <section class="home-banner standard" style={{backgroundImage:"/images/standard2/bg.jpg",backgroundPositionX:"center",backgroundPositionY:"center",backgroundRepeat:"no-repeat"}}>
                <img src="images/standard/orange.png" alt="" class="position-absolute" style={{width:"100%",left:"-30px",zIndex:"2",maxWidth:"85px",top:"130px"}}/>
                <img src="images/standard/purple-zigzag.png" alt="" class="position-absolute" style={{width:"100%",left:"68px",bottom:"-58px",zIndex:"2",maxWidth:"130px"}}/>
                <img src="images/standard/yellow.png" alt="" class="position-absolute" style={{width:"100%",right:"-30px",top:"35%",zIndex:"2",maxWidth:"102px"}}/>
                <img src="images/standard/pinkcircle.png" alt="" class="position-absolute" style={{right:"10%",width:"100%",zIndex:"2",bottom:"0px",maxWidth:"102px",transform:"translateY(50%)"}}/>
            
                <div class="container banner-center">
                    <div class="row">
                        <div class="col-md-5 pt-25">
                            <div class="banner-heading standardbannerheadingdiv">
                                <h6 style={{position:"relative"}}><img src="images/standard/circle.png" alt="" class="position-absolute" style={{left:"-5px",zIndex:"2",maxWidth:"60px",top:"-18px"}}/> Standard</h6>
                                <h1>A New Approach to Graphic Design.</h1>
                                <h1><span>Simple. Scalable. Reliable.</span></h1>
                                <p>Modern branding designs that set your business apart from your competitors. Our professional designers creates brand recipe that makes your business shine in the market.</p>
                            </div>
                            <div class="bannerbtnwhitediv">
                                <a href="pricing.html" class="a-link purple-link pricing">See Pricing</a>
                                <a href="#" class="a-link watchvideo">Watch The Video</a>
                            </div>
                        </div>
                        <div class="col-md-7 standardpagemainbannerimg">
                            <img src="images/standard2/banner.png" />
                        </div>
                    </div>
                </div>
        </section>
        )
    }
}


export default StandardJumbotron;
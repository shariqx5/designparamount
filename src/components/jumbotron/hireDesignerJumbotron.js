import React,{Component} from 'react';

class HireDesignerJumbotron extends Component{

    render(){
        return(
            <section class="home-banner" style={{backgroundColor:"#363636"}}>
            {/* <!--<div class="home-banner-bg position-absolute header-distance">
                    <img src="images/home/banner-bg/2.png" alt="" id="home-banner-bg-2">
                    <img src="images/home/banner-bg/3.png" alt="" id="home-banner-bg-3">
                    <img src="images/home/banner-bg/4.png" alt="" id="home-banner-bg-4">
                    <img src="images/home/banner-bg/5.png" alt="" id="home-banner-bg-5">
                </div>--> */}
            <img src="images/standard/orange.png" alt="" class="position-absolute" style={{width:"100%",left:"-30px",zIndex:"2",maxWidth:"85px",top:"130px"}}/>
            <img src="images/standard/purple-zigzag.png" alt="" class="position-absolute" style={{width:"100%",left:"68px",bottom:"-58px",zIndex:"2",maxWidth:"130px"}}/>
            <img src="images/standard/yellow.png" alt="" class="position-absolute" style={{right:"-30px",width:"100%",zIndex:"2",bottom:"200px",maxWidth:"102px"}}/>
            
            <div class="container banner-center">
                <div class="row">
                    <div class="col-md-5">
                        <div class="banner-heading standardbannerheadingdiv">
                            <h1>Want To Hire Our Pro Designer</h1>
                            <h1><span>So Here We Will Tell You About Michail.</span></h1>
                            <p>Modern branding designs that set your business apart from your competitors. Our professional designers add their creative juices.</p>
                        </div>
                        <div class="bannerbtnwhitediv">
                            <a href="pricing.html" class="a-link purple-link">See Pricing</a>
                            <a href="#" class="a-link watchvideo" style={{borderColor:"#fff",color:"#fff"}}>Watch The Video</a>
                        </div>
                    </div>
                    <div class="col-md-7 standardpagemainbannerimg">
                        <img src="images/designer/1.png" />
                    </div>
                </div>
            </div>
    
            {/* <!--<div class="banner-right-area">
                <div class="half-height-box">
                    <div class="right-sec-heading">
                        <h2>Pro</h2>
                        <h3>Add a designer to your team today</h3>
                        <p>Great for agencies and medium to large businesses</p>
                        <a href="#">Learn More <i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
    
                <div class="half-height-box">
                    <div class="right-sec-heading">
                        <h2>Standard</h2>
                        <h3>The secret to scaling your hustle</h3>
                        <p>Great for solo entrepreneurs and small businesses</p>
                        <a href="#">Learn More <i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>--> */}
        </section>
        
        )
    }
}


export default HireDesignerJumbotron;
import React,{Component} from 'react';

class CaseStudyJumbotron extends Component{

    render(){
        return(
            <section className="home-banner cafebannerdiv">
            <img src="/images/standard/orange.png" alt="" className="position-absolute" style={{width:"100%",left:"-30px",zIndex:"2",maxWidth:"85px",top:"130px"}} />
            <img src="/images/standard/purple-zigzag.png" alt="" className="position-absolute" style={{width:"100%",left:"18px",bottom:"-70px",zIndex:"2",maxWidth:"130px"}} />
            <img src="/images/standard/yellow.png" alt="" className="position-absolute" style={{right:"-30px",width:"100%",zIndex:"2",bottom:"200px",maxWidth:"102px"}} />
            
            <div className="container banner-center">
                <div className="row">
                    <div className="col-md-5" style={{paddingTop:"5%"}}>
                        <div className="banner-heading standardbannerheadingdiv">
                            <h1><span>Case Study:</span></h1>
                            <h1>Broadway Art Initiative</h1>
                            <p>Modern branding designs that set your business apart from your competitors. Our professional designers add their creative juices. business apart from your competitors.</p>
                        </div>
                        {/* <!--<div className="bannerbtnwhitediv casestudybannericon">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-facebook"></i>
                        </div>--> */}
                    </div>
                    <div className="col-md-7 standardpagemainbannerimg">
                        <img src="/img/cafe/banner.jpg" style={{maxWidth:"105%",width:"105%"}} />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}


export default CaseStudyJumbotron;
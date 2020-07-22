import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import TeamMemberBox from '../teamMemberBox/TeamMemberBox';

//css imports
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    0:{
        items:1,
    },
    800:{
        items:1
    },
    1000:{
        items:2
    }
};


class MeetDesigner extends Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="meetdesignersec position-rel" style={{paddingTop:"80px",paddingBottom:"55px"}}>
                <img src="images/pro/shape2.png" alt="" className="position-absolute" style={{maxWidth:"210px",top:"125px",right:"-115px",width:"100%"}}/>
                <div className="container">
                    <div className="row position-rel">
                        <div className="col-md-5">
                            <div className={this.props.showBlack?"banner-heading promeetsomeheadingdiv":"banner-heading"}>
                                <h1>Meet Some of<br /> the Designers <br /><span>Behind the <br />Work.</span></h1>
                                <p>Whether you’re just starting out or growing sales into the millions, learn from some of our most successful Design Pickle clients on how they grew their business through our unlimited graphic design support. learn from some of our most successful.</p>
                            </div>
                            <div className="link-area">
                                <a href="request.html" className="a-link purple-link">Get a Demo</a>
                            </div>
                        </div>
                        <img src="images/standard/team-bg.png" alt="" className="position-absolute" style={{maxWidth:"800px",top:"-35px",right:"-135px",width:"100%",opacity:"0.2"}}/>
                        <div className="col-md-7">
                            <OwlCarousel
                                className="testimonial-carousel owl-carousel"
                                items={2}
                                loop={true}
                                autoplay={true}
                                responsiveClass={true}
                                responsive={options}
                            >
                                
                                    <div className="item testimonialitem">
                                    <div className="row">
                                            <TeamMemberBox />
                                        </div>
                                    </div>
                                    <div className="item testimonialitem">
                                        <div className="row">
                                            <TeamMemberBox />
                                        </div>
                                    </div>
                                    <div className="item testimonialitem">
                                        <div className="row">
                                            <TeamMemberBox />
                                        </div>
                                    </div>
                                    <div className="item testimonialitem">
                                        <div className="row">
                                            <TeamMemberBox />
                                        </div>
                                    </div>
                                    <div className="item testimonialitem">
                                        <div className="row">
                                            <TeamMemberBox />
                                        </div>
                                    </div>
                                    <div className="item testimonialitem">
                                        <div className="row">
                                            <TeamMemberBox />
                                        </div>
                                    </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default MeetDesigner;
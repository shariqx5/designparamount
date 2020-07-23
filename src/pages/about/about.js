import React,{Component} from 'react';
import OurPurpose from './ourPurpose';
import OurMission from './ourMission';
import MeetTheTeam from './meetTheTeam/meetTheTeam';
import DesignerOfMonth from './designerOfMonth';
import {Layout,AboutJumbotron,PortfolioCounter,HelpAction} from '../../components';

class About extends Component{

    render(){
        return(
            <Layout>
                <AboutJumbotron />
                <PortfolioCounter />
                <section className="corevaluesec position-rel">
                    <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{maxWidth:"22px",left:"-120px",top:"-32px",width:"100%"}}/>
                    <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{maxWidth:"220px",right:"-115px",bottom:"-126px",width:"100%"}}/>
                    <img src="images/aboutus/3.png" alt="" className="position-absolute" style={{width:"100%",transform:"rotate(-180deg)",left:"-40px",bottom:"-15px",maxWidth:"90px"}}/>
                    <img src="images/aboutus/2.png" alt="" className="position-absolute" style={{width:"100%",right:"-40px",top:"5px",zIndex:"2",maxWidth:"90px"}}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="section-heading mb-50">
                                    <h1>Our <span>Core Values</span></h1>
                                </div>
                                <div className="corevaluepointdiv">
                                    <ul> 
                                        <li>
                                            <h5><span>01</span>&nbsp; We Are <span>Friendly</span></h5>
                                            <p>Our team is super social, and we make sure that you are completely comfortable and happy while working with us.</p>
                                        </li>
                                        <li>
                                            <h5><span>02</span>&nbsp; We Are <span>Smart-Working</span></h5>
                                            <p>Not only that, we work hard, but we also do it smartly. The expert designers and marketers that we have onboard know how to do both and better.</p>
                                        </li>
                                        <li>
                                            <h5><span>03</span>&nbsp; We Are <span>Trustworthy</span></h5>
                                            <p>Integrity is our priority. It means a great deal to us that you can trust us with your ideas, business technicalities, and work.</p>
                                        </li>
                                        <li>
                                            <h5><span>04</span>&nbsp; We Are <span>helpful</span></h5>
                                            <p>We are in the business to serve the brilliant entrepreneurs to excel and rise in the market. Your win is a win to us.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7 corevalueimgdiv">
                                <img src="images/aboutus/image.png" />
                            </div>
                        </div>
                    </div>
                </section>
                <OurPurpose />
                <OurMission />
                <MeetTheTeam />
                <DesignerOfMonth />
                <HelpAction />
            </Layout>
        )
    }
}


export default About;
import React,{Component} from 'react';

class OurMission extends Component{

    render(){
        return(
            <section className="corevaluesec position-rel">
                <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{maxWidth:"220px",left:"-120px",top:"70px",width:"100%"}}/>
                <img src="images/shapes/triangle.png" alt="" className="position-absolute" style={{maxWidth:"220px",right:"-115px",top:"70px",width:"100%"}}/>
                <div className="container">
                    <div className="section-heading text-center ourmissiondiv">
                        <h1>Our <span>Mission</span></h1>
                        <p>To provide the most aesthetic and conceptual graphic designs, you can find anywhere and provide you the digital exposure that incredibly boosts your brand image.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 howitworkdiv text-center">
                            <img src="images/aboutus/mission1.png" />
                            <h5><span>01</span> Tell us what you <br />need</h5><br />
                            {/* <!--<i className="fas fa-plus"></i>--> */}
                            <p>With us, you do not have to restrict your imagination. Tell us exactly what you want, show us the inspiration that sparked the idea in your mind.</p>
                        </div>
                        <div className="col-md-4 howitworkdiv text-center">
                            <img src="images/aboutus/mission2.png" />
                            <h5><span>02</span> Your designer gets <br />to work</h5><br />
                            <p>Once your idea has been transferred into our designer’s creative mind, they get to work, formulating the best designs to sweep you off your feet!</p>
                        </div>
                        <div className="col-md-4 howitworkdiv text-center">
                            <img src="images/aboutus/mission3.png" />
                            <h5><span>03</span> Recieve your amazing design</h5><br />
                            <p>There is nothing that can stop you from impressing your audience with creative and unique artwork.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurMission;
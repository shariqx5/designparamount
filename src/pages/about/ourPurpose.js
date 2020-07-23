import React,{Component} from 'react';

class OurPurpose extends Component{

    render(){
        return(
            <section className="corevaluesec ourpurposebgcolor position-rel">
                <img src="images/shapes/4.png" alt="" className="position-absolute" style={{maxWidth:"90px",left:"-10px",transform:"rotate(-180deg)",top:"-40px",width:"100%"}}/>
                <img src="images/aboutus/8.png" alt="" className="position-absolute" style={{maxWidth:"95px",right:"-40px",transform:"rotate(43deg)",top:"35px",width:"100%"}}/>
                <img src="images/shapes/2.png" alt="" className="position-absolute" style={{maxWidth:"90px",width:"100%",right:"-18px",bottom:"-57px"}}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-right ourpurposeimgdiv">
                            <img src="images/aboutus/purpose.png" />
                        </div>
                        <div className="col-md-6">
                            <div className="section-heading ourpurposeheadingdiv">
                                <h1 className="text-white">Our <span>Purpose</span></h1>
                                <p className="text-white">We have a dream to make the marketplace an aesthetically pleasing universe where digital marketing practices are as creative as one can imagine. Bad graphic designs, poorly written
                                    content, and lazy marketing make us cringe. Do you feel the same? Let’s change that!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default OurPurpose;
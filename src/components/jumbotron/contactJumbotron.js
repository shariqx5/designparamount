import React,{Component} from 'react';

class ContactJumbotron extends Component{

    render(){
        return(
            <section className="white-section pricingtabsec position-rel">
            <img src="images/contactus/1.png" alt="" className="position-absolute" style={{transform:"rotate(12deg)",right:"-20px",width:"100%",zIndex:"2",maxWidth:"85px",top:"130px"}} />
            <img src="images/contactus/2.png" alt="" className="position-absolute" style={{right:"42px",maxWidth:"85px",top:"115px",width:"100%",zIndex:"2"}}/>
            <img src="images/contactus/3.png" alt="" className="position-absolute" style={{left:"350px",width:"100%",maxWidth:"100px",bottom:"-7px",zIndex:"2"}}/>
            <img src="images/contactus/4.png" alt="" className="position-absolute" style={{left:"-20px",zIndex:"2",maxWidth:"90px",width:"100%",top:"150px"}}/>
           {/* <!-- <div className="pricingbannercolor"></div>
            <div className="home-banner-bg position-absolute header-distance">
                    <img src="images/home/banner-bg/1.png" alt="" id="home-banner-bg-1" />
                    <img src="images/home/banner-bg/2.png" alt="" id="home-banner-bg-2" />
                    <img src="images/home/banner-bg/3.png" alt="" id="home-banner-bg-3" />
                    <img src="images/home/banner-bg/4.png" alt="" id="home-banner-bg-4" />
                    <img src="images/home/banner-bg/5.png" alt="" id="home-banner-bg-5" />
                </div>--> */}
            <div className="contactbannercolor"></div>
            <div className="container">
                <div className="row">
                        <div className="section-heading text-center contactmainbanner">
                            <h1>Need Any <span>Help?</span><br /> Talk To Us Now</h1>
                            <p>Great design ideas and execution is just a click away. Contact Us Now.</p>
                        </div>
                </div>
            </div>
           
        </section>
        )
    }
}


export default ContactJumbotron;
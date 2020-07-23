import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const options = {
    0:{
        items:1,
    },
    1000:{
        items:1
    }
};

class DesignerPortfolio extends Component{

    render(){
        return(
            <section className="corevaluesec position-rel pt-80">
            <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{maxWidth:"220px",left:"-120px",top:"-32px",width:"100%"}}/>
            <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{maxWidth:"220px",right:"-115px",bottom:"-126px",width:"100%"}}/>
            <img src="images/aboutus/3.png" alt="" className="position-absolute" style={{width:"100%",transform:"rotate(-180deg)",left:"-40px",bottom:"-15px",maxWidth:"90px"}}/>
            <img src="images/aboutus/2.png" alt="" className="position-absolute" style={{width:"100%",right:"-40px",top:"5px",zIndex:"2",maxWidth:"90px"}}/>
           <div className="container">
               <div className="row">
                   <div className="col-md-6">
                       <div className="section-heading mb-50">
                           <h1>Have You Checked the Stats of Michail? <br /><span>Now We will Help You To Know More About Him</span></h1>
                           <p>Our team is super social, and we make sure that you are completely comfortable and happy while working with us. Not only that, we work hard, but we also do it smartly. The expert designers and marketers that we have onboard know how to do both and better. Our team is super social, and we make sure that you are completely comfortable and happy while working with us.</p>
                       </div>
                       <div className="link-area">
                           <a href="pricing.html" className="a-link purple-link">See Pricing</a>
                           <a href="#" className="a-link">Watch The Video</a>
                       </div>
                   </div>
                   <div className="col-md-6 corevalueimgdiv">
                       
                       <OwlCarousel
                            className="designer-p-carousel owl-carousel"
                            items={1}
                            loop={true}
                            autoplay={true}
                            responsiveClass={true}
                            responsive={options}
                        >
                           <div className="item">
                               <img src="images/designer/2.png" />
                           </div>
                           <div className="item">
                               <img src="images/designer/4.png" />
                           </div>
                        </OwlCarousel>
                       
                   </div>
               </div>
           </div>
       </section>
        )
    }
}


export default DesignerPortfolio;
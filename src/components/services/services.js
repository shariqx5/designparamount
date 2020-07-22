import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const serviceOptions = {
    0:{
        items:1,
    },
    800:{
        items:2
    },
    1000:{
        items:3
    }
};


class Services extends Component{


    render(){
        return(
            <div className="services-carousel">
                    <OwlCarousel 
                    className="owl-carousel"
                    items={3}
                    loop={true}
                    autoplay={true}
                    responsiveClass={true}
                    responsive={serviceOptions}
                    >
                    <div className="item">
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/1.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                    <h1>Logo Design</h1>
                                    <p>Creative logo designs that help your brand stand out in highly competitive markets.</p>
                                </div>
                            </div>
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/2.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                <h1>Social Cover</h1>
                                <p>Your social media platforms must be able to impress the visitors in the first impression.</p>
                                </div>
                            </div>
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/7.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                <h1>Bag Design</h1>
                                <p>Your social media platforms must be able to impress the visitors in the first impression.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/3.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                    <h1>Brand Identity</h1>
                                    <p>Build a lasting brand identity that attains brand retention and loyalty better than your competitors.</p>
                                </div>
                            </div>
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/4.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                    <h1>Car Wrap</h1>
                                    <p>Get unique and vibrant car wrap designs and let your customers be wowed!</p>
                                </div>
                            </div>
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/8.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                    <h1>Custom Illustration</h1>
                                    <p>Get unique and vibrant car wrap designs and let your customers be wowed!</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/5.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                    <h1>Web Template Designs</h1>
                                    <p>We design websites with user friendly UI and optimised UX for your customers.</p>
                                </div>
                            </div>
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/6.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                    <h1>Flyers</h1>
                                    <p>Our flyer designs attract your customer’s attention and retain it with brilliantly written content.</p>
                                </div>
                            </div>
                            <div className="single-service">
                                <div className="single-service-img">
                                    <img src="/images/services/9.png" alt="" />
                                </div>
                                <div className="single-service-detail">
                                    <h1>Signage Design</h1>
                                    <p>Get unique and vibrant car wrap designs and let your customers be wowed!</p>
                                </div>
                            </div>
                        </div>
                    
                    </OwlCarousel>
			    </div>
        )
    }
}   


export default Services;
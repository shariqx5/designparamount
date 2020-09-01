import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    0:{
        items:1,
    },
    400:{
        items:2
    },
    800:{
        items:4
    },
    1000:{
        items:6
    }
};
class Client extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="white-section pb-0 position-rel mb-80">
			    <img src="/images/shapes/circle.png" alt="" className="position-absolute top-0 left-0 circle-top-left max-width-190" />
			    <img src="/images/shapes/triangle.png" alt="" className="position-absolute top-0 right-0 triangle-top-right max-width-190" />
                <div className="container">
                    <div className={this.props.showBlack?"propagecompanyheading text-center":"section-small-heading"}>
                        <h1>You will Be in Good Company</h1>
                    </div>
                    {/* <div className="companies-carousel owl-carousel">
                        
                    </div> */}
                    <OwlCarousel
                    className={this.props.showBlack?"owl-theme companies-carousel afterbannercarousel":"owl-theme companies-carousel"}
                    items={6}
                    loop={true}
                    autoplay={true}
                    responsiveClass={true}
                    responsive={options}
                    >
                        <div className="item">
                            <img src="/images/companies/1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/companies/2.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/companies/3.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/companies/5.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/images/companies/6.png" alt="" />
                        </div>
                    </OwlCarousel>
                </div>
		</section>
        )
    }
}


export default Client;
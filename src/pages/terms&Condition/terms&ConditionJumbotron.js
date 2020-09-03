import React,{Component} from 'react';
import style from './terms&condition.module.css';

class TermsAndConditionJumbotron extends Component{

    render(){
        return(
            <section className={`home-banner position-rel ${style.terms_and_condition}`} id="counter" style={{height:"auto",minHeight:"410px"}}>
            <img src="/images/aboutus/3.png" alt="" className="position-absolute" style={{width:"100%",left:"-22px",zIndex:"2",maxWidth:"75px",transform:"rotate(-180deg)",top:"70px"}} />
            <img src="/images/standard/purple-zigzag.png" alt="" className="position-absolute" style={{width:"100%",left:"68px",bottom:"-35px",zIndex:"2",maxWidth:"100px"}} />
            <img src="/images/aboutus/10.png" alt="" className="position-absolute" style={{width:"100%",right:"-5px",bottom:"35px",zIndex:"2",maxWidth:"65px"}} />
            <div className="container banner-center">
                <div className="row">
                    <div className="col-md-5 aboutmainbannercontentdiv">
                        <div className="banner-heading">
                            <h1>Terms <span>& Conditions</span></h1>
                            <p>We are a 360-digital solutions company that provides cutting edge graphic designing, animation, digital marketing, SEO content, and all other services your business may need.</p>
                        </div>
                    </div>
                    <div className="col-md-7 aboutmainbannersideimgdiv text-center">
                        <img src="/images/aboutus/aboutbannersideimg.png" />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}


export default TermsAndConditionJumbotron;
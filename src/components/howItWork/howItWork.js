import React,{Component} from 'react';
import './howItWork.css';

class HowItWork extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className={this.props.showBlack?"position-rel corevaluesec pt-80 mb-0":"position-rel corevaluesec pt-80"}>
            
            <img src="images/pro/shape2.png" alt="" className="position-absolute" style={{maxWidth:"220px",left:"-105px",top:"-160px",width:"100%"}}/>
            <img src="images/pro/shape1.png" alt="" className="position-absolute" style={{maxWidth:"220px",right:"-100px",transform:"rotate(4deg)",top:"0px",width:"100%"}}/>
            <img src="images/shapes/4.png" alt="" className="position-absolute" style={{maxWidth:"120px",right:"-60px",bottom:"-60px",width:"100%"}}/>
            <div className="container">
            <div className={this.props.showBlack?"section-heading text-center":"section-heading text-center white"}>
                <h1 className={this.props.showBlack?"":""}>How Does It Work? <span>It's Simple</span></h1>
            </div><br />
            <div className={this.props.showBlack?"row":"row"}>
                <div className="col-md-4 howitworkdiv text-center howitworkdiv1">
                    <img src="images/standard/1-3.png" />
                    <h5><span>01</span> Tell us what you need</h5><br />
                    {/* <!--<i className="fas fa-plus"></i>--> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="col-md-4 howitworkdiv text-center howitworkdiv2">
                    <img src="images/standard/1-2.png" />
                    <h5><span>02</span> Your designer gets<br /> to work</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="col-md-4 howitworkdiv text-center howitworkdiv3">
                    <img src="images/standard/1-1.png" />
                    <h5><span>03</span> Recieve your amazing design</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
                </div>
        </section>
        )
    }
}

export default HowItWork;
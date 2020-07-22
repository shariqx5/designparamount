import React,{Component} from 'react';
import './addDesigner.css';

class AddDesigner extends Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.categoryClass!==""?`row ${this.props.categoryClass}`:"row"}>
            <div className="col-md-4 propricediv">
                <div className="position-rel" style={{background:'white'}}>
                    <img src={`images/pricing/service/${this.props.categoryImage}`} />
                    <h4>{this.props.designerCategory}</h4>
                    <h2>${this.props.designerPrice}</h2>
                    <h6>{this.props.timePeriod}</h6>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="col-md-8 propricecontentdiv">
                <div className="single-price single_price" style={{paddingTop:"40px"}}>
                    <h4 style={{color:'white',textAlign:'center'}}>Add a designer to your team today</h4>
                    <div className="price-detail">
                        <ul>
                            <li>
                                <div className="price-icon"><img src="images/pricing/icons/1.png" alt="" /></div>
                                <p>Static graphics like flyers, infographics, social media graphics and more</p>
                            </li>
                            <li>
                                <div className="price-icon"><img src="images/pricing/icons/2.png" alt="" /></div>
                                <p>1-2 business day turnaround</p>
                            </li>
                            <li>
                                <div className="price-icon"><img src="images/pricing/icons/3.png" alt="" /></div>
                                <p>Easy communication via our platform, email, or Zapier</p>
                            </li>
                            <li>
                                <div className="price-icon"><img src="images/pricing/icons/4.png" alt="" /></div>
                                <p>14-day 100% satisfaction guarantee</p>
                            </li>
                            <li>
                                <div className="price-icon"><img src="images/pricing/icons/3.png" alt="" /></div>
                                <p>Easy communication via our platform, email, or Zapier</p>
                            </li>
                            <li>
                                <div className="price-icon"><img src="images/pricing/icons/4.png" alt="" /></div>
                                <p>14-day 100% satisfaction guarantee</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        )
    }
}


export default AddDesigner;
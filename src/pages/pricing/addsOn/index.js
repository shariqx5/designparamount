import React,{Component} from 'react';
import CustomIllustraton from './customIllustration';
import SeePortfolio from './seePortfolio';
import style from '../pricing.module.css';

class AddsOn extends Component{

    render(){
        return(
            <section className={`${style.addonplansec}`}>
	        <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{maxWidth:"190px",top:"170px",right:"-115px",width:"100%"}}/>
	        <img src="images/shapes/triangle.png" alt="" className="position-absolute" style={{maxWidth:"190px",left:"-93px",bottom:"425px",width:"100%",transform:"rotate(78deg)"}}/>
	        <div className="container">
	            <div className="row">
	                <div className="col-12 text-center">
	                    <div className="section-heading mb-80 text-center">
							<h1>Plan <span>Add-ons</span></h1>
	                        <p>Looking to pump up your subscription with custom illustrations or premium <br />Design Pickle stock and templates? Cjeck out some of our add-ons</p>
	                    </div>	
	                </div>
                    <CustomIllustraton />
                    <SeePortfolio />
	            </div>
	        </div>
	    </section>
        )
    }
}


export default AddsOn;
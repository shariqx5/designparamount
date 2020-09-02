import React,{Component} from 'react';
import style from './pricing.module.css';

class FAQ extends Component{

    render(){
        return(
            <section className={`${style.faqsec} position-rel`}>
	        
	        <img src="images/shapes/circle.png" alt="" className="position-absolute" style={{maxWidth:"190px",left:"-110px",bottom:"1px",transform:"rotate(-30deg)",width:"100%"}}/>
	        <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{maxWidth:"190px",right:"-110px",top:"11px",width:"100%"}}/>
	        
	        <div className="container">
	            <div className="row">
	                 <div className="col-md-6">
	                    <div className="section-heading mb-20 text-left">
							<h1>Still Have Question? <br /><span>Relax. The Gauge has <br />your back.</span></h1>
	                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	                    </div>	
	                     <div className="row">
	                        <form className={`${style.subscribeinputform}`}>
	                            <div>
	                                <input className={`${style.subscribeinput}`} placeholder="Enter Your Email Address Here..." />
	                                <button className={`${style.subscribebtn}`} type="submit">Notify Me</button>
	                            </div>
	                         </form>
	                     </div>
	            </div>
	<div className="col-md-6">
	<div id="accordion">
	  <div className={`card ${style.faqaccordion}`}>
	    <div className={`card-header ${style.card_header}`} id="headingOne">
	      <h5 className="mb-0">
	        <button className={`btn ${style.faqaccordionbtn} collapsed`} data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
	          What does unlimited really mean?
	            <i className={`fa fa-plus ${style.plussign} float-right`}></i>
	        </button>
	          
	          {/* <!--<i className="fa fa-minus minussign"></i>--> */}
	      </h5>
	    </div>

	    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
	      <div className="card-body">It means you can have as many revisions as you want for as much time as you want until and unless you are 100% happy with the work.</div>
	    </div>
	  </div>
	  <div className={`card ${style.faqaccordion}`}>
	    <div className={`card-header ${style.card_header}`} id="headingTwo">
	      <h5 className="mb-0">
	        <button className={`btn ${style.faqaccordionbtn} collapsed`} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
	          Can I Design?
	            <i className={`fa fa-plus ${style.plussign} float-right`}></i>
	          </button>
	          
	      </h5>
	    </div>
	    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
	      <div className="card-body">
	      If you have an idea that you want us to create, you can provide a rough, hand-drawn sketch which we would bring to life for your brand.
	      </div>
	    </div>
	  </div>
	  <div className={`card ${style.faqaccordion}`}>
	    <div className={`card-header ${style.card_header}`} id="headingThree">
	      <h5 className="mb-0">
	        <button className={`btn ${style.faqaccordionbtn} collapsed`} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
	          Who owns the creative work?
	            <i className={`fa fa-plus ${style.plussign} float-right`}></i>
	        </button>
	          
	      </h5>
	    </div>
	    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
	      <div className="card-body">
	       All the copyrights of the logo design and other artwork will be owned by you. You can use the same designs or modify them as you please. 
	      </div>
	    </div>
	  </div>
	    <div className={`card ${style.faqaccordion}`}>
            <div className={`card-header ${style.card_header}`} id="headingFour">
                <h5 className="mb-0">
                    <button className={`btn ${style.faqaccordionbtn}`} data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What is the turnaround time?
                        <i className={`fa fa-plus ${style.plussign} float-right`}></i>
                    </button>
                    
                </h5>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div className="card-body">
                        The time from the minute you place an order to the moment you get your work delivered the first time is the turnaround time. Precisely, the amount of time taken to fulfill your request. 
                </div>
            </div>
	    </div>
            <div className={`card ${style.faqaccordion}`}>
                    <div className={`card-header ${style.card_header}`} id="headingFive">
                    <h5 className="mb-0">
                        <button className={`btn ${style.faqaccordionbtn}`} data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How many revisions can I request?
                            <i className={`fa fa-plus ${style.plussign} float-right`}></i>
                        </button>
                
                    </h5>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div className="card-body">
                    You can request unlimited revisions until you are 100% happy with the designs.
                    </div>
                    </div>
            </div>
	</div>
	                </div>
	            </div>
	        </div>
	    </section>
        )
    }
}


export default FAQ;
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <header className="header">
		        <div className="container-fluid headerdivdesktop">
			        <div className="row position-rel">
				        <div className="col-lg-3" style={{paddingTop:"14px",paddingLeft:"15px"}}>
                            <a href="index.html">
                            <img alt="Logo-Header" src="/images/logo-header.svg" className="logo-wid" />
                            </a>
				        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 position-initial">
                            <ul className="menu">
                                <li className="dropdown">
                                    <a href="javascript:void(0)">Product</a>
                                    <div className="dropdown-content">
                                        <div className="proheaderdiv headerdropdowndiv1">
                                            <div>
                                                <a href="#" className="position-rel">
                                                    <img src="/images/pricing/service/3.png" alt="Design-Paramount" className="position-absolute" style={{width:"100%",top:"18px",left:"24px",maxWidth:"45px"}}/>
                                                    <h6>Design Pickle Ultimate</h6>
                                                    <h6>The recipe to ingenious brand building</h6>
                                                    <p>All ingredients needed for single-handed startups</p>
                                                    <Link to="/ultimate"><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="proheaderdiv headerdropdowndiv2">
                                            <div><a href="#" className="position-rel">
                                                    <img src="/images/pricing/service/2.png" alt="Design-Paramount" className="position-absolute" style={{width:"100%",top:"18px",left:"24px",maxWidth:"45px"}}/>
                                                    <h6>Design Pickle Pro</h6>
                                                    <h6>The recipe to ingenious brand building</h6>
                                                    <p>All ingredients needed for single-handed startups</p>
                                                    <Link to="/pro"><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="proheaderdiv headerdropdowndiv3">
                                            <div>
                                                <a href="standard.html" className="position-rel">
                                                    <img src="/images/pricing/service/1.png" alt="Design-Paramount" className="position-absolute" style={{width:"100%",top:"18px",left:"24px",maxWidth:"45px"}}/>
                                                    <h6>Design Pickle Standard</h6>
                                                    <h6>The recipe to ingenious brand building</h6>
                                                    <p>All ingredients needed for single-handed startups</p>
                                                    <Link to="/standard"><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--<li><a href="index.html">Home</a></li>--> */}
                                <li><a href="#"><Link to="/portfolio">Our Work</Link></a></li>
                                <li><a href="#"><Link to="/pricing">Pricing</Link></a></li>
                                <li><a href="#"><Link to="/about">About</Link></a></li>
                                <li><a href="#"><Link to="contact">Contact</Link></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 d-none d-lg-block">
                            <ul className="menu menu-right">
                                <li><a href="login.html">Login</a></li>
                                <li><a href="request.html" className="get-a-demo-link">Get A Demo</a></li>
                            </ul>
                        </div>
			        </div>
		        </div>
        
      
        
                {/* <!-- Simulate a smartphone / tablet --> */}
                <div className="mobile-container headerdivmobile row">

                {/* <!-- Top Navigation Menu --> */}
                    <div className="topnav">
                        <a href="index.html" className="active">
                            <img alt="Logo-Header" src="/images/logo-header.svg" />
                        </a>
                        <div id="myLinks">
                            <a href="standard.html">Standard</a>
                            <a href="pro.html">Pro</a>
                            <a href="portfolio.html">Our Work</a>
                            <a href="pricing.html">Pricing</a>
                            <a href="about.html">About</a>
                            <a href="contact.html">Contact</a>
                            <a href="request.html">Get a Demo</a>
                            <a href="login.html">Login</a>
                        </div>
                        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
	    </header>
        )
    }
}


export default Navbar;
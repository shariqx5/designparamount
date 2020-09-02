import React,{Component} from 'react';
import {CookiesHelper} from '../helpers';
import {Link} from 'react-router-dom';



const cookiesHelper = new CookiesHelper();
class Navbar extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            showLogin : true
        }
    }

    checkToShowLoginOrNot = ()=>{
        const token = cookiesHelper.getCookie('authToken');
        if(token!=="" && token!==null){
            this.setState({
                showLogin : false
            })
        }

        else {
            this.setState({
                showLogin : true
            })
        }
    }




    changeNavbar = ()=>{
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
    }


    
    render(){

        return(
            <header className="header">
		        <div className="container-fluid headerdivdesktop">
			        <div className="row position-rel">
				        <div className="col-lg-3" style={{paddingTop:"14px",paddingLeft:"15px"}}>
                            <Link to="/">
                                <img alt="Logo-Header" src="/images/logo-header.svg" className="logo-wid" />
                            </Link>
				        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 position-initial">
                            <ul className="menu">
                                <li className="dropdown">
                                    <a href="javascript:void(0)" className="black-color">Product</a>
                                    <div className="dropdown-content">
                                        <div className="proheaderdiv headerdropdowndiv1">
                                            <div>
                                                <a href="#" className="position-rel">
                                                    <img src="/images/pricing/service/3.png" alt="Design-Paramount" className="position-absolute" style={{width:"100%",top:"18px",left:"24px",maxWidth:"45px"}}/>
                                                    <h6>Design Pickle Ultimate</h6>
                                                    <h6>The recipe to ingenious brand building</h6>
                                                    <p>All ingredients needed for single-handed startups</p>
                                                    <Link className="white-color" to="/ultimate"><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="proheaderdiv headerdropdowndiv2">
                                            <div><a href="#" className="position-rel">
                                                    <img src="/images/pricing/service/2.png" alt="Design-Paramount" className="position-absolute" style={{width:"100%",top:"18px",left:"24px",maxWidth:"45px"}}/>
                                                    <h6>Design Pickle Pro</h6>
                                                    <h6>The recipe to ingenious brand building</h6>
                                                    <p>All ingredients needed for single-handed startups</p>
                                                    <Link className="white-color" to="/pro"><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
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
                                                    <Link className="white-color" to="/standard"><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--<li><a href="index.html">Home</a></li>--> */}
                                <li><a href="#"><Link className="black-color" to="/portfolio">Our Work</Link></a></li>
                                <li><a href="#"><Link className="black-color" to="/pricing">Pricing</Link></a></li>
                                <li><a href="#"><Link className="black-color" to="/about">About</Link></a></li>
                                <li><a href="#"><Link className="black-color" to="/contact">Contact</Link></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 d-none d-lg-block">
                            <ul className="menu menu-right">
                                <li><a href="#">{this.state.showLogin?(<Link className="black-color" to="/login">Login</Link>):(<Link className="black-color" to="/client/orders">Client Area</Link>)}</a></li>
                                <li><a href="#" className="get-a-demo-link"><Link className="get-a-demo-link" to="/request">Get A Demo</Link></a></li>
                            </ul>
                        </div>
			        </div>
		        </div>
        
      
        
                {/* <!-- Simulate a smartphone / tablet --> */}
                <div className="mobile-container headerdivmobile row">

                {/* <!-- Top Navigation Menu --> */}
                    <div className="topnav">
                        <Link to="/" className="active">
                            <img alt="Logo-Header" src="/images/logo-header.svg" />
                        </Link>
                        <div id="myLinks">
                            <Link to="/standard">Standard</Link>
                            <Link to="/pro">Pro</Link>
                            <Link to="/portfolio">Our Work</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/request">Get a Demo</Link>
                            <Link to="/login">Login</Link>
                        </div>
                        <a href="javascript:void(0);" className="icon" onClick={this.changeNavbar}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
	    </header>
        )
    }
}


export default Navbar;
import React,{Component} from 'react';
import {CookiesHelper, URLHelper} from '../helpers';
import {Link} from 'react-router-dom';

const urlHelper = new URLHelper();
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
                                    <a href="javascript:void(0)" className="black-color">Services</a>
                                    <div className="dropdown-content">
                                        <div className="proheaderdiv headerdropdowndiv1">
                                            <div>
                                                <Link to={urlHelper.getURL('logo-design')} className="position-rel white-color">
                                                    <img src="/images/pricing/service/3.png" alt="Design-Paramount" className="position-absolute" style={{width:"100%",top:"18px",left:"24px",maxWidth:"45px"}}/>
                                                    <h6>Logo Design</h6>
                                                    <h6>The recipe to ingenious brand building</h6>
                                                    <p>All ingredients needed for single-handed startups</p>
                                                    <Link className="white-color" to={urlHelper.getURL('logo-design')}><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="proheaderdiv headerdropdowndiv2">
                                            <div><Link to={urlHelper.getURL('brand-design')} className="position-rel white-color">
                                                    <img src="/images/pricing/service/2.png" alt="Design-Paramount" className="position-absolute" style={{width:"100%",top:"18px",left:"24px",maxWidth:"45px"}}/>
                                                    <h6>Branding Design</h6>
                                                    <h6>The recipe to ingenious brand building</h6>
                                                    <p>All ingredients needed for single-handed startups</p>
                                                    <Link className="white-color" to={urlHelper.getURL('brand-design')}><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="proheaderdiv headerdropdowndiv3">
                                            <div>
                                                <Link to={urlHelper.getURL('web-design')} className="position-rel white-color">
                                                    <img src="/images/pricing/service/1.png" alt="Design-Paramount" className="position-absolute" style={{width:"100%",top:"18px",left:"24px",maxWidth:"45px"}}/>
                                                    <h6>Web Design</h6>
                                                    <h6>The recipe to ingenious brand building</h6>
                                                    <p>All ingredients needed for single-handed startups</p>
                                                    <Link className="white-color" to={urlHelper.getURL('web-design')}><p>Learn More &nbsp;<i className="fas fa-arrow-right"></i></p></Link>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--<li><a href="index.html">Home</a></li>--> */}
                                <li><a href="#"><Link className="black-color" to={urlHelper.getURL('portfolio')}>Our Work</Link></a></li>
                                <li><a href="#"><Link className="black-color" to={urlHelper.getURL('pricing')}>Pricing</Link></a></li>
                                <li><a href="#"><Link className="black-color" to={urlHelper.getURL('about')}>About</Link></a></li>
                                <li><a href="#"><Link className="black-color" to={urlHelper.getURL('contact')}>Contact</Link></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 d-none d-lg-block">
                            <ul className="menu menu-right">
                                {/* <li><a href="#">{this.state.showLogin?(<Link className="black-color" to={urlHelper.getURL('login')}>Login</Link>):(<Link className="black-color" to={urlHelper.getURL('client-orders')}>Client Area</Link>)}</a></li> */}
                                <li><a href="#" className="get-a-demo-link" onClick={this.props.togglePopup}>Request a Quote</a></li>
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
                            <Link to="/standard">Logo Design</Link>
                            <Link to="/pro">Brand Design</Link>
                            <Link to="/portfolio">Web Design</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <a onClick={this.props.togglePopup}>Request a Quote</a>
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
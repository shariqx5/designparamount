import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    
    render(){
        return(
            <footer>
                <div className="footergraydiv">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/images/logo-footer.svg" className="footerlogoimg" />
                                {/* <!--<img src="images/footerlogo.png" className="footerlogoimg">--> */}
                                <div className="footericon">
                                    <i className="fab fa-facebook-f"></i>&emsp;
                                    <i className="fab fa-twitter"></i>&emsp;
                                    <i className="fab fa-linkedin-in"></i>&emsp;
                                    <i className="fab fa-instagram"></i>&emsp;
                                    <i className="fab fa-pinterest"></i>&emsp;
                                    <i className="fab fa-behance"></i>&emsp;
                                    <i className="fab fa-dribbble"></i>
                                </div>
                                                
                                <img src="/images/footerpayment.png" className="footerpaymentimg" />
                            </div>
                            <div className="col-md-2 footer-content">
                                <h6>PRODUCTS</h6>
                                
                                <a href="#"><Link className="gray-color" to="/standard">Standard</Link></a><br />
                                <a href="#"><Link className="gray-color" to="/pro">Pro</Link></a><br />
                                <a href="#"><Link className="gray-color" to="/ultimate">Ultimate</Link></a><br />
                                <a href="#"><Link className="gray-color" to="/request">Single Request</Link></a><br />
                                <a href="#"><Link className="gray-color" to="/portfolio">Portfolio</Link></a>
                            </div>
                            <div className="col-md-2 footer-content">
                                <h6>ABOUT</h6>
                                
                                <a href="#"><Link className="gray-color" to="/about#team">Our Team</Link></a><br />
                                <a href="#"><Link className="gray-color" to="/case-study">Case Studies</Link></a><br />
                                <a href="#"><Link className="gray-color" to="/hire-designer">Hire A Designer</Link></a><br />
                                <a href="#"><Link className="gray-color" to="/contact">Contact Us</Link></a>
                            </div>
                            <div className="col-md-2 footer-content">
                                <h6>RESOURCES</h6>
                                
                                <a href="#"><Link className="gray-color" to="/blogs">Blog</Link></a><br />
                                <a href="#"><Link className="gray-color" to="/pricing">Pricing</Link></a><br />
                                <a href="/sign-up"><Link className="gray-color" to="/sign-up">Sign Up</Link></a><br />
                                <a href="/login"><Link className="gray-color" to="/login">Log In</Link></a>
                            </div>
                            <div className="col-md-2 footer-content">
                                <h6>Address</h6>
                                <p>3 E Evergreen Road # 1009, New City, NY 10956</p>
                                <h6>Email</h6>
                                <p><a href="mailto:info@designparamount.com">info@designparamount.com</a></p>
                                <h6>Contact</h6>
                                <p className="m-0"><a href="tel:5852522266">585 252 2266</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerpurplediv">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 footerlinks">
                                <Link to="/privacy">Privacy Policy</Link>&emsp;
                                <span>|</span>&emsp;
                                <Link to="/terms">Terms &amp; Conditions</Link>
                            </div>
                            <div className="col-lg-6 text-right copyrightdiv">
                                <p>&#169; Design Paramount 2020. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer;
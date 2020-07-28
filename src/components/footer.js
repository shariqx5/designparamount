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
                                
                                <a href="standard.html">Standard</a><br />
                                <a href="pro.html">Pro</a><br />
                                <a href="ultimate.html">Ultimate</a><br />
                                <a href="request.html">Single Request</a><br />
                                <a href="portfolio.html">Portfolio</a>
                            </div>
                            <div className="col-md-2 footer-content">
                                <h6>ABOUT</h6>
                                
                                <a href="about.html#team">Our Team</a><br />
                                <a href="case-study-list.html">Case Studies</a><br />
                                <a href="designer.html">Hire A Designer</a><br />
                                <a href="contact.html">Contact Us</a>
                            </div>
                            <div className="col-md-2 footer-content">
                                <h6>RESOURCES</h6>
                                
                                <a href="#"><Link to="/blogs">Blog</Link></a><br />
                                <a href="pricing.html">Pricing</a><br />
                                <a href="signup.html">Sign Up</a><br />
                                <a href="login.html">Log In</a>
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
                                <a href="privacy.html">Privacy Policy</a>&emsp;
                                <span>|</span>&emsp;
                                <a href="terms.html">Terms &amp; Conditions</a>
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
import React,{Component} from 'react';
import './index.css';

class Popup extends Component{

    render(){
        return(
            <div className={this.props.showPopup? "popup-form show-popup": "popup-form"}>
            <div className="popup-form-container">
                <div className="close-popup" onClick = {this.props.togglePopup}>
                    <i className="fas fa-times"></i>
                </div>
                <form>
                    <div className="form-row">
                        <div className="col-12 text-center">
                            <div className="section-heading mb-40">
                                <h1>Whatever You Need, <br /><span>We've Got the Right Plan for You</span></h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="popup-input" placeholder="Enter Your Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="popup-input" placeholder="Enter Email Here" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="popup-input" placeholder="Phone Number" />
                        </div>
                        <div className="col-md-6">
                            <select className="popup-input">
                                <option>Logo Design</option>
                                <option>Branding Design</option>
                                <option>Web Design</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <textarea className="popup-input" placeholder="Enter Message Here"></textarea>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <input type="submit" value="Submit" className="popup-submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}


export default Popup;
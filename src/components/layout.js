import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Popup from './popup';

class Layout extends Component{

    constructor(props){
        super(props);
        this.state = {
            showPopup: false
        }

        this.togglePopup = this.togglePopup.bind(this);
    }


    togglePopup = (event)=>{
        event.preventDefault();
        console.log('popup fired');
        const {showPopup} = this.state;
        this.setState({
            showPopup : !showPopup
        });
    }

    render(){
        const {showPopup} = this.state;

        return(
            <React.Fragment>
                <Navbar togglePopup = {this.togglePopup}/>
                <section className="main">
                    {this.props.children}
                </section>
                <Footer />
                <Popup showPopup = {showPopup} togglePopup = {this.togglePopup}/>
            </React.Fragment>
        )
    }
}


export default Layout;
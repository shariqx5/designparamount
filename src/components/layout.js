import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Layout extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <section className="main">
                    {this.props.children}
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}


export default Layout;
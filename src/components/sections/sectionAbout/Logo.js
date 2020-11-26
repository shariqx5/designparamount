import React, {Component} from 'react';
import AboutLayout from './index';
import ImageOptimizer from '../../imageOptimizer';

class Logo extends Component{

    render(){
        return(
            <AboutLayout 
        heading = {<Heading />}
        button = {<Button />}
        sideImage = {<SideImage />}
        >
        </AboutLayout>
        )
    }
}




const Heading = ()=>{
    return(
        <div className="section-heading">
            <h1>Logo Design <span>In Detail</span></h1>
            <p>Make your business logos recognizable via font type If you need to distinguish your company with a unique font style in your logo, then the Word Mark logo is the best option. This makes it easy to recall, memorize, and capture your business name. An appealing feature of typography firmly grounds the Word Mark logo base. When the business name is catchy, it automatically makes your organization appealing. There are different kinds from which you can choose if you want your logo font heavy, curvy edgy, or thin.</p>
        </div>
    )
};


const Button = ()=>{
    return(
        <div className="link-area">
            <a href="#" className="a-link more-padding-lr purple-link">Live Chat</a>
            <a href="contact.html" className="a-link more-padding-lr">Let's Start</a>
        </div>
    )
}



const SideImage = ()=>{
    return(
        <ImageOptimizer path={"/design_gigantic/side-sections/logo-side-section.png"} lqip={{active:true, quality:20}} className="logo-side-sec"/>
    )
};


export default Logo;
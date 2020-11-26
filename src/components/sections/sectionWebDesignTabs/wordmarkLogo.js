import React,{Component} from 'react';
import ImageOptimizer from '../../imageOptimizer';

class WordmarkLogo extends Component{

    render(){
        return(<div role="tabpanel" className="tab-pane fade in active show" id="wordmark-logo-service">
	        <div className="row">
	            <div className="col-md-6">
	                <div className="section-heading">
						<h1>HTML <span>Website</span></h1>
							<p>Make your business logos recognizable via font type If you need to distinguish your company with a unique font style in your logo, then the Word Mark logo is the best option. This makes it easy to recall, memorize, and capture your business name. An appealing feature of typography firmly grounds the Word Mark logo base. When the business name is catchy, it automatically makes your organization appealing. There are different kinds from which you can choose if you want your logo font heavy, curvy edgy, or thin.</p>
					</div>
				<div className="link-area">
                    <a href="#" className="a-link more-padding-lr purple-link">Live Chat</a>
                    <a href="contact.html" className="a-link more-padding-lr">Let's Start</a>
			    </div>
	            </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
					<ImageOptimizer path={"/design_gigantic/web-type/1.png"} lqip={{active:true, quality:20}}/>
                </div>
            </div>
	    </div>)
    }
}


export default WordmarkLogo;
import React, {Component} from 'react';
import TabsNav from './tabsNav';
import WordMarkLogo from './wordmarkLogo';
import AbstractLogo from './abstractLogo';
import IllustrativeLogo from './illustrativeLogo';
import EmblemLogo from './emblemLogo';

class LogoDesignTabs extends Component{

    render(){
        return(
            <section className="white-section">
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<div className="section-heading mb-60">
							<h1>Whatever You Need, <br /><span>We've Got the Right Plan for You</span></h1>
						</div>
					</div>
					<div className="col-12">
						<TabsNav />
					</div>
					<div className="col-12">
						<div className="tab-content service-tabs-content-new">
	                    	<WordMarkLogo />
                            <AbstractLogo />
                            <IllustrativeLogo />
                            <EmblemLogo />
	                    </div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}



export default LogoDesignTabs;
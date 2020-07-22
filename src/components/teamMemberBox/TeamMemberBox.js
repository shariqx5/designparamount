import React,{Component} from 'react';

class TeamMemberBox extends Component{

    render(){
        return(
            <div className="single-blog testmain protestdiv" style={{borderBottom:"6px solid #fff"}}>
                           {/* <!-- <div className="testimg"></div>--> */}
						  <img src="images/testimonials/per1.png" className="testimg" />
                            <hr />
						<div className="blog-detail testcontent">
      
							<h6>Joanna Kae</h6>
							<p>Art Director</p>
							<p className="blog-description">Designs are feeling delivered through my pen. Always ready for new challanges and hunger for creativity</p>
						</div>
					</div>
        )
    }
}


export default TeamMemberBox;
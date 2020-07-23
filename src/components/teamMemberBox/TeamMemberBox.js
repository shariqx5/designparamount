import React,{Component} from 'react';
import './teamMemberBox.css';

class TeamMemberBox extends Component{

    constructor(props){
        super(props);
        this.state={
            className:""
        }
    }


    componentDidMount(){
        const {style} = this.props;
        if(style === 'pro' || style === 'ultimate'){
            this.setState({
                className:"protestdiv"
            })
        }
        else{
            this.setState({
                className:'standard_team_bg'
            })
        }
    }

    render(){
        return(
            <div className={`single-blog testmain ${this.state.className}`}>
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
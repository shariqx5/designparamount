import React,{Component} from 'react';

class Sidebar extends Component{

    render(){
        return(
            <div className="blog-fixed-bar">
                {this.props.children}
			</div>
        )
    }
}


export default Sidebar;
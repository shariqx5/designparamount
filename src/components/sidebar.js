import React,{Component} from 'react';

class Sidebar extends Component{

    componentDidMount(){
        const scriptsPath = ["/js/jquery.sticky-kit.js","/js/fixed-section.js"];
        scriptsPath.map((scriptPath,i)=>{
            const script = document.createElement("script");
            script.src = scriptPath;
            script.async = true;
            document.body.append(script);
        });
        
    }

    render(){
        return(
            <div className="blog-fixed-bar">
                {this.props.children}
			</div>
        )
    }
}


export default Sidebar;
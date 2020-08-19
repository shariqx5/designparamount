import React,{Component} from 'react';
import './collapsePanel.css';


class CollapsePanel extends Component{

    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="panel panel-default" id="panel1">
                <div className="panel-heading">
                    <h4 className="panel-title">
                    <a
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        href="#collapseOne"
                    >
                        {this.props.heading}
                    </a>
                    </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in show">
                    <div className="panel-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


export default CollapsePanel;
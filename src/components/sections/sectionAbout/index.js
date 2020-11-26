import React,{Component} from 'react';


class AboutLayout extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="light-grey-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {this.props.heading}
                            {this.props.button}
                        </div>
                        <div className="col-md-6">
                            {this.props.sideImage}
                        </div>
                    </div>
                </div>
		    </section>
        )
    }
}


export default AboutLayout;
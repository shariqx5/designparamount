import React,{ Component } from 'react';
import DropIn from 'braintree-web-drop-in-react';

class Braintree extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <React.Fragment>
                {this.props.clientToken !==""?(
                <DropIn 
                    options = {{
                        authorization : this.props.clientToken
                    }}
                    onInstance = {(instance)=>this.props.setBrainTreeInstance(instance)}
                />
            ):""}
            </React.Fragment>
        )
    }
}


export default Braintree;
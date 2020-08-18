import React from 'react';
import {CookiesHelper} from '../helpers';
import {Redirect} from 'react-router-dom';


const cookiesHelper = new CookiesHelper();

class PrivateRoute extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            redirect : false,
            url : ''
        }
    }


    componentDidMount(){
        const authToken = cookiesHelper.getCookie('authToken');
        if(authToken === undefined){
            this.setState({
                redirect : true,
                url : '/login'
            })
        }
    }



    render(){
        const {redirect,url} = this.state;
        const Component = this.props.component;
        if(redirect){
            return <Redirect to={url} />
        }


        return(
            <Component {...this.props}/>
        )
    }
}


export default PrivateRoute;
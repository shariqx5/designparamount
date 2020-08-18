import React,{Component} from 'react';
import {Layout} from '../../components';
import {UserAPI} from '../../api';
import {CookiesHelper} from '../../helpers';
import {Redirect} from 'react-router-dom';
import './login.css';


const userAPI = new UserAPI();
const cookiesHelper = new CookiesHelper();

class Login extends Component{


	constructor(props){
		super(props);
		this.state = {
			email : "",
			password : "",
			redirect : false,
			url : '',
			error : {
				loginError : "",
				email : "",
				password : "",
			}
		}
	}



	onChange = (event)=>{
		const {name,value} = event.target;
		this.setState({
			[name]:value
		})
	}




	submitLogin = async(event)=>{
		event.preventDefault();
		const {email,password} = this.state;
		if(email !== "" && password !== ""){
			const response = await userAPI.login(email, password);
			if(response.status === 'success'){
				const {data} = response;
				cookiesHelper.setLoginCookies({token: data.token,name:data.name,email:data.email});
				this.setState({
					redirect : true,
					url : '/client'
				})
			}
			else{
				const error = {};
				error.loginError = 'Invalid email or password';
				this.setState({
					error
				})
			}
		}
	}




    render(){
		const {error,redirect, url} = this.state;
		if(redirect){
			return <Redirect to={url}/>
		}
        return(
            <Layout>
                <section>
		            <div class="signupbgcolor"></div>
                </section>
                <section className="signupsec">
				<div className="container">
				<div className="wholesignupbox">
							<div className="section-heading text-center">
										<h1>Login <span>Form</span></h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor incididunt</p>
							</div>
					<div className="row justify-content-center">
					<form className="signinformtag">
						<div className="form-row">
								<div className="form-group col-md-12 signupformdiv">
									<input type="email" name="email" className="form-control" id="inputsubject" placeholder="Email" onChange={this.onChange}/>
								</div>
						</div>
						<div className="form-row">
								<div className="form-group col-md-12 signupformdiv">
									<input type="password" name="password" className="form-control" id="inputbudget" placeholder="Password" onChange={this.onChange}/>
								</div>
						</div>
						{error.loginError!=="" && <label className="error">{error.loginError}</label>}
						<div className="form-row">
								<div className="form-group col-md-12 signupformdiv">
										<button type="submit" className="btn" onClick={this.submitLogin}>Sign In</button>
								</div>
						</div>
					</form>
					</div>
					</div>
				</div>
			</section>
            </Layout>
        )
    }
}


export default Login;
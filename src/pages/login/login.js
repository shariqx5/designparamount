import React,{Component} from 'react';
import {Layout} from '../../components';
import './login.css';

class Login extends Component{

    render(){
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
          <input type="text" className="form-control" id="inputsubject" placeholder="Email" />
        </div>
			  </div>
			  <div className="form-row">
			  <div className="form-group col-md-12 signupformdiv">
			    <input type="text" className="form-control" id="inputbudget" placeholder="Password" />
			  </div>
        </div>
        <div className="form-row">
			  <div className="form-group col-md-12 signupformdiv">
			   <button type="submit" className="btn">Sign In</button>
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
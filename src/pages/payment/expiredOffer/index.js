import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import style from './expiredOffer.module.css';

class ExpiredOffer extends Component{

    state = {
        url : '',
        redirect : false,
        timer : 5
    }


    componentDidMount(){
        this.loadCSS();
        this.startTimer();
    }



    componentWillUnmount(){
        const {timer} = this.state;
        window.clearInterval(timer);
    }



    startTimer = ()=>{
        
        setInterval(()=>{
            const {timer} = this.state;
            this.setState({
                timer : timer-1
            })
        },1000);


        setTimeout(this.redirectToHome,5000)
    }




    redirectToHome = ()=>{
        this.setState({
            redirect : true,
            url : '/'
        })
    }



    loadCSS = ()=>{
        const urls = ["/css/bootstrap.min.css"];
        for (var url in urls){
            const link = document.createElement("link");
            link.href = url;
            document.head.append(link);
        }
    }



    render(){

        const {redirect,url} = this.state;

        if(redirect){
            return <Redirect to={url}/>
        }

        return(
            <section className={`contact-sec ${style.contact}`}>
                <div className="auto-container pl-45 pr-45 d-flex justify-content-center">
                    <div className="row">
                            <div className="row reorder-xs">
                                <div className={`${style.contact_heading} text-left col-xs-12 col-md-12`}>
                                    <h1>
                                        <span>Oops Sorry!</span><br />This Offer Is Expired
                                    </h1>
                                    <br />
                                    <p>We are taking back to you on our website in <span id="timer">{this.state.timer}</span> sec</p>
                                </div>
                            </div>
                    </div>
                </div>  
            </section>
        )
    }
}


export default ExpiredOffer;
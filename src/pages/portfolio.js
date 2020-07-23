import React,{Component} from 'react';
import {Layout,PortfolioNavigation,Portfolio,MeetDesigners,HelpAction,PortfolioJumbotron} from '../components';

class PortfolioPage extends Component{

    render(){
        return(
            <Layout>
                <PortfolioJumbotron />
                <section className="purple-sec portfolio-before-sec">
                    <div className="container">
                        <div className="section-heading text-center">
                            <h1>Our <span>Portfolio</span></h1>
                            <p className="text-white">Our portfolio is evidence of our par excellence design skills. Have a look for yourself and <br />decide the kind of brand you want to build with.</p>
                        </div>
                        <PortfolioNavigation />
                    </div>
		        </section>
                <Portfolio />
                <MeetDesigners style='pro'/>
                <HelpAction />
            </Layout>
        )
    }
}


export default PortfolioPage;
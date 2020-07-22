import React,{Component} from 'react';
import {Layout,HomeJumbotron,Clients,ExpensiveDesign,Portfolio,PortfolioNavigation,Services} from '../components';

class Home extends Component{

    // constructor(props){
    //     this.state={
    //         videos:[]
    //     }
    // }
    

    render(){
        return(
            <Layout>
                <HomeJumbotron />
                <Clients />
                <ExpensiveDesign />
                <section className="purple-sec portfolio-before-sec mt-40" id="portfolio">
                    <img src="/images/shapes/triangle.png" alt="" className="position-absolute top-0 left-0 triangle-top-left max-width-190" />
                    <img src="/images/shapes/circle.png" alt="" className="position-absolute top-0 right-0 circle-top-right max-width-190" />

                    <div className="container">
                        <div className="section-heading">
                            <h1>What We Offer<br /> and <span>Portfolio</span></h1>
                        </div>
                        <Services />
                        <PortfolioNavigation />
                    </div>
		        </section>
                <Portfolio />
            </Layout>
        )
    }
}



export default Home;
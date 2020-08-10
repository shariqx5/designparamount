import React,{Component} from 'react';
import {BlogAPI} from '../api';
import {Layout,
        HomeJumbotron,
        Clients,
        ExpensiveDesign,
        Portfolio,
        PortfolioNavigation,
        Services,
        Testimonial,
        StandardTable,
        ProTable,
        UltimateTable,
        HelpAction,
        BlogBox,
        LoadingBlogBox
    } from '../components';

const blogAPI = new BlogAPI();

class Home extends Component{

    // constructor(props){
    //     this.state={
    //         videos:[]
    //     }
    // }

    state = {
        blogs : [],
        limit : 4
    }


    async componentDidMount(){
        const data = await blogAPI.fetchAllBlogs();
        this.setState({
            blogs:data.data
        })
    }
    

    render(){
        const {blogs,limit} = this.state;
        const LoadingBlogs = [];
		if(blogs.length<=0){
			for(let i = 0;i<limit;i++){
				LoadingBlogs.push(<div className="col-md-3"><LoadingBlogBox /></div>);
			}
        }
        
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
                <Testimonial />
                <section class="white-section three-pricing-sec">
			<img src="images/shapes/triangle.png" alt="" class="position-absolute top-0 right-0 triangle-top-right max-width-190" />
			<img src="images/shapes/circle.png" alt="" class="position-absolute top-0 left-0 circle-top-left-2 max-width-190" />
			<img src="images/shapes/lines.png" alt="" class="position-absolute top-20 left-0 lines-top-left max-width-200" />
			<img src="images/shapes/lines.png" alt="" class="position-absolute bottom-20 right-0 lines-bottom-right max-width-200" />

			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<div className="section-heading mb-80">
							<h1>Whatever You Need, <br /><span>We've Got the Right Plan for You</span></h1>
						</div>
					</div>
					<div className="col-md-4">
                        <StandardTable />
					</div>
					<div class="col-md-4">
						<ProTable />
					</div>
					<div class="col-md-4">
						<UltimateTable />
					</div>
				</div>
			</div>
		</section>
            <HelpAction />
            <section class="white-section">
			<img src="images/shapes/3.png" alt="" class="position-absolute bottom-0 left-0 shapes-bottom-left max-width-100" />
			<div class="container">
				<div class="row">
					<div class="col-12 text-center">
						<div class="section-heading mb-60">
							<h1>Read Our Experience! <br /><span>Stay Up-To Date With Our Latest Blog</span></h1>
						</div>
					</div>
                    {
								blogs.length>0?(
									blogs.map((blog,j)=>(
										<div className="col-md-3">
											<BlogBox key={j} {...blog}/>
										</div>
									))
								):LoadingBlogs
								
					}
                </div>
			</div>
		</section>
            </Layout>
        )
    }
}



export default Home;
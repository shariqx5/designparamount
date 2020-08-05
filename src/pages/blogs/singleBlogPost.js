import React,{Component} from 'react';
import {Layout,BlogJumbotron,HelpAction,Categories,Search,Sidebar} from '../../components';
import ShortBlogThumbnail from './shortBlogThumbnail';
import {BlogAPI} from '../../api';
import {StringHelper} from '../../helpers';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const blogAPI = new BlogAPI();
const stringHelper = new StringHelper();

class SingleBlogPost extends Component{

	constructor(props){
		super(props);
		this.state={
			blog:'',
			redirect:false,
			url:""
		}

		this.handleSearch = this.handleSearch.bind(this);
	}



	async componentDidMount(){
		if(this.props.match.params!==""){
			const title = this.props.match.params.title;
			const data = await blogAPI.fetchSinglePostDetails(title);
			this.setState({
				blog:data.data[0]
			})
		}
		else{
			this.props.history.goBack();
		}
	}


	
	handleSearch(searchText){
		this.setState({
			redirect:true,
			url:"/blogs?search="+searchText
		})
        // this.props.history.push(window.location.pathname+"?search="+searchText);
        // searchText = encodeURI(searchText);
        // this.setState({
        //     searchQuery:searchText,
        //     blogs:[]
        // },()=>this.searchData());
        
    }



    render(){
		const {blog,redirect,url} = this.state;
		
		if(redirect){
			return(
				<Redirect to={url}/>
			)
		}
        return(
            <Layout>
                <BlogJumbotron />
                <section className="white-section pt-0 position-rel">
                <img src="/images/shapes/triangle.png" alt="" className="position-absolute" style={{width:"100%",top:"500px",left:"-20px",zIndex:"2",maxWidth:"160px"}} />
                <img src="/images/shapes/lines.png" alt="" className="position-absolute" style={{width:"100%",top:"430px",right:"-80px",zIndex:"2",maxWidth:"180px"}} />
                <img src="/images/shapes/lines.png" alt="" className="position-absolute" style={{width:"100%",bottom:"100px",left:"-90px",zIndex:"2",maxWidth:"180px"}} />
                <img src="/images/shapes/circle.png" alt="" className="position-absolute" style={{width:"100%",bottom:"230px",right:"-90px",zIndex:"2",maxWidth:"180px"}} />
			<div className="container">
				<div className="row section-upto-banner blog-list-page">
					<div className="col-md-8">
                        <div class="single-blog">
							<div class="blog-img">
								<img src={blog!==""?blog.blog_image:''} alt="" />
							</div>
							<div class="blog-detail">
								<p class="blog-date">{blog!==""?blog.month+" "+blog.day+", "+blog.year:""}</p>
								<h6>{blog!==""?blog.title:""}</h6>
								<p class="blog-description">
									{blog!==""?stringHelper.decodeHtmlEntities(blog.blog_desc):""}
									{/* <!--<a href="#">Read More</a>--> */}
								</p>
								<div class="blog-uploader-like">
									<div class="blog-uploader">
										<img src={blog!==""?blog.image:""} alt="" />
										<p>Published by {blog!==""?blog.name:""}</p>
									</div>
									<div class="blog-like">
										<a href="#"><i class="far fa-comment"></i> 12 Comments</a>
										<a href="#"><i class="far fa-heart"></i> 12 Likes</a>
									</div>
								</div>
							</div>
						</div>
						<div class="single-blog blogform">
						    <div>
						        <h2>Add Comments</h2>
						    </div>
						    <br />
                    <form>
                        
                      <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control blogformfields" placeholder="Name*" required />
                                <i class="far fa-user iconblogform"></i>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control blogformfields" placeholder="Email*" required />
                                <i class="far fa-envelope iconblogform"></i>
                            </div>
                      </div>
                      <div class="form-group">
                            <textarea class="form-control blogformfields" rows="5" placeholder="Message*" required ></textarea>
                      </div>
                      <a href="#" class="a-link more-padding-lr purple-link">Post a Comment</a>
                    </form>
                    </div>
					</div>
					<div className="col-md-4 margin-fixed-mob" style={{zIndex:2}}>
						<Sidebar>
							<div className="blog-right-detail">
								<h3>Search</h3>
								<div className="row">
									<div className="col-12">
										<Search handleSearch={this.handleSearch}/>
									</div>
								</div>
							</div>
							<div className="blog-right-detail">
								<h3>Categories</h3>
								<Categories />
							</div>
							<div className="blog-right-detail">
								<h3>
									<ul className="recent-popular-tabs nav nav-tabs">
										<li className="nav-item">
											<a className="nav-link active" data-toggle="tab" href="#recent-blog">Recent Posts</a> 
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#popular-blog">Popular</a>
										</li>
									</ul>
								</h3>
								<div className="tab-content">
									<div className="tab-pane active" id="recent-blog">
										<ul className="blog-recent">
											<li>
												<ShortBlogThumbnail />
											</li>
											<li>
                                                <ShortBlogThumbnail />
											</li>
										</ul>
									</div>

									<div className="tab-pane fade" id="popular-blog">
										<ul className="blog-recent">
											<li>
                                                <ShortBlogThumbnail />
											</li>
											<li>
                                                <ShortBlogThumbnail />
											</li>
										</ul>
									</div>
								</div>
							</div>
						</Sidebar>
					</div>
				</div>
			</div>
		</section>
		
                <HelpAction />
            </Layout>
        )
    }
}


export default SingleBlogPost;
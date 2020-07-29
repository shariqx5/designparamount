import React,{Component} from 'react';
import {Layout,BlogJumbotron,HelpAction,Categories,Search} from '../../components';
import ShortBlogThumbnail from './shortBlogThumbnail';

class SingleBlogPost extends Component{

    render(){
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
								<img src="/images/blog/1.jpg" alt="" />
							</div>
							<div class="blog-detail">
								<p class="blog-date">January 29, 2020</p>
								<h6>Web Design <span>is fun</span></h6>
								<p class="blog-description">Weather you are just starting business through our design and support. Weather you are just starting business through our design and support. 
								Weather you are just starting business through our design and support. Weather you are just starting business through our design and support. Weather you are just starting 
								business through our design and support. Weather you are just starting business through our design and support. <br />Weather you are just starting business through our design and support. Weather you are just starting business through our design and support. 
								Weather you are just starting business through our design and support. Weather you are just starting business through our design and support. Weather you are just starting 
								business through our design and support. Weather you are just starting business through our design and support. <br />Weather you are just starting business through our design and support. Weather you are just starting business through our design and support. 
								Weather you are just starting business through our design and support. Weather you are just starting business through our design and support. Weather you are just starting 
								business through our design and support. Weather you are just starting business through our design and support. <br />Weather you are just starting business through our design and support. Weather you are just starting business through our design and support. 
								Weather you are just starting business through our design and support. Weather you are just starting business through our design and support. Weather you are just starting 
								business through our design and support. Weather you are just starting business through our design and support
									{/* <!--<a href="#">Read More</a>--> */}
								</p>
								<div class="blog-uploader-like">
									<div class="blog-uploader">
										<img src="/images/blog/uploader/1.jpg" alt="" />
										<p>Published by Admin</p>
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
					<div className="col-md-4">
						<div className="blog-fixed-bar">
							<div className="blog-right-detail">
								<h3>Search</h3>
								<div className="row">
									<div className="col-12">
										<Search />
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
						</div>
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
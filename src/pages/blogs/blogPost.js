import React,{Component} from 'react';
import {BlogBox,Search,Categories,LoadingBlogBox} from '../../components';
import ShortBlogThumbnail from './shortBlogThumbnail';


class BlogPost extends Component{

	constructor(props){
		super(props);
	}

    render(){
		const {blogs,limit} = this.props;
		console.log(`length of blogs is ${blogs.length}`);
		const LoadingBlogs = [];
		if(blogs.length<=0){
			for(let i = 0;i<limit;i++){
				LoadingBlogs.push(<div className="col-md-6"><LoadingBlogBox /></div>);
			}
		}

        return(
            <section className="white-section pt-0 position-rel">
            <img src="images/shapes/triangle.png" alt="" className="position-absolute" style={{width:"100%",top:"500px",left:"-20px",zIndex:"2",maxWidth:"160px"}} />
            <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{width:"100%",top:"430px",right:"-80px",zIndex:"2",maxWidth:"180px"}} />
            <img src="images/shapes/lines.png" alt="" className="position-absolute" style={{width:"100%",bottom:"100px",left:"-90px",zIndex:"2",maxWidth:"180px"}} />
            <img src="images/shapes/circle.png" alt="" className="position-absolute" style={{width:"100%",bottom:"230px",right:"-90px",zIndex:"2",maxWidth:"180px"}} />
			<div className="container">
				<div className="row section-upto-banner blog-list-page">
					<div className="col-md-8">
						<div className="row">
							{
								blogs.length>0?(
									blogs.map((blog,j)=>(
										<div className="col-md-6">
											<BlogBox key={j} {...blog}/>
										</div>
									))
								):LoadingBlogs
								
							}
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
		
		)
    }
}


export default BlogPost;
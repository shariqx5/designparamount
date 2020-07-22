import React,{Component} from 'react';

class BlogBox extends Component{

    render(){
        return(
            <div className="single-blog">
						    <a href="blogs.html">
    							<div className="blog-img">
    								<img src="images/blog/1.jpg" alt="" />
    							</div>
							</a>
							<div className="blog-detail">
								<p className="blog-date">January 29, 2020</p>
						        <a href="blogs.html">
								    <h6>Web Design is fun</h6>
								</a>
								<p className="blog-description">Weather you are just starting business through our design and support... 
									<a href="blogs.html">Read More</a>
								</p>
								<div className="blog-uploader">
									<img src="images/blog/uploader/1.jpg" alt="" />
									<p>Published by Admin</p>
								</div>
							</div>
						</div>
        )
    }
}


export default BlogBox;
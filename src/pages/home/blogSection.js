import React, {Component} from 'react';
import {BlogAPI} from '../../api';
import {BlogBox, LoadingBlogBox} from '../../components';


const blogAPI = new BlogAPI();

class BlogSection extends Component{


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
        )
    }
}


export default BlogSection;
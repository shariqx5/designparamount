import React,{Component} from 'react';
import {StringHelper} from '../../helpers';
import {Redirect} from 'react-router-dom';

const stringHelper = new StringHelper();

class BlogBox extends Component{

	constructor(props){
		super(props);
		this.state={
			redirect:false,
			url:''
		}
	}


	onClick = (event)=>{
		event.preventDefault();
		const {url_title} = this.props;
		this.setState({
			url:`/blogs/${url_title}`,
			redirect:true
		})
	}


    render(){

		const {redirect,url} = this.state;

		if(redirect){
			return <Redirect to={url}/>
		}
		console.log('image of blog is '+this.props.blog_image);
        return(
            <div className="single-blog">
						    <a href="blogs.html">
    							<div className="blog-img">
    								<img src={this.props.blog_image} alt="" />
    							</div>
							</a>
							<div className="blog-detail">
								<p className="blog-date">{this.props.month+" "+this.props.day+", "+this.props.year}</p>
						        <a href="#" onClick={this.onClick}>
									<h6>{this.props.title}</h6>
								</a>
								<p className="blog-description">{this.props.small_desc} 
									<a href="#" onClick={this.onClick}>... Read More</a>
								</p>
								<div className="blog-uploader">
									<img src={this.props.image} alt="" />
									<p>Published by {this.props.name}</p>
								</div>
							</div>
			</div>
        )
    }
}


export default BlogBox;
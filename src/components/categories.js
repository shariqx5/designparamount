import React,{Component} from 'react';
import {BlogAPI} from '../api';

const blogAPI = new BlogAPI();

class Categories extends Component{

    state={
        categories:[]
    }

    async componentDidMount(){
        const data = await blogAPI.fetchAllCategories();
        this.setState({
            categories:data.data
        })
    }

    render(){
        const {categories} = this.state;
        return(
            <ul className="blog-cat">
				{categories.map((category,i)=>(
                    <li key={i}><a href="#">{category.cat_name}</a></li>
                ))}
			</ul>
        )
    }
}


export default Categories;
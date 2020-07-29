import React,{Component} from 'react';
import {Layout,BlogJumbotron,HelpAction} from '../../components';
import {BlogAPI} from '../../api';
import BlogPost from './blogPost';


const blogAPI = new BlogAPI();

class Blogs extends Component{

    constructor(props){
        super(props);
        this.state={
            blogs : [],
            currentPage:0,
            offset:0,
            limit:10
        }
    }


    async componentDidMount(){
        const data = await blogAPI.fetchAllBlogs();
        console.log(data);
        this.setState({
            blogs:data.data
        })
    }


    render(){
        return(
            <Layout>
                <BlogJumbotron />
                <BlogPost {...this.state}/>
                <HelpAction />
            </Layout>
        )
    }
}


export default Blogs;
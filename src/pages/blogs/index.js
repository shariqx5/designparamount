import React,{Component} from 'react';
import {Layout,BlogJumbotron,HelpAction} from '../../components';
import {BlogAPI} from '../../api';
import BlogPost from './blogPost';
import {Redirect} from 'react-router-dom';


const blogAPI = new BlogAPI();

class Blogs extends Component{

    constructor(props){
        super(props);
        this.state={
            blogs : [],
            currentPage:0,
            offset:0,
            limit:10,
            redirect : false,
            url : ''
        }

        this.handleSearch = this.handleSearch.bind(this);
    }


    async componentDidMount(){
        const data = await blogAPI.fetchAllBlogs();
        console.log(data);
        this.setState({
            blogs:data.data
        })
    }


    handleSearch(searchText){
        console.log(`Search value is ${searchText}`);
        this.setState({
            redirect : true,
            url : `/blogs/search?query=${searchText}`,
            blogs : []
        })
    }


    render(){

        const {redirect,url} = this.state;
        if(redirect){
            return <Redirect to={url}/>
        }

        return(
            <Layout>
                <BlogJumbotron />
                <BlogPost 
                {...this.state}
                handleSearch = {this.handleSearch}
                />
                <HelpAction />
            </Layout>
        )
    }
}


export default Blogs;
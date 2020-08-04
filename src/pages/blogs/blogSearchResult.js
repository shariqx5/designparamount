import React,{Component} from 'react';
import {Layout,BlogJumbotron,HelpAction} from '../../components';
import {BlogAPI} from '../../api';
import BlogPost from './blogPost';

const blogAPI = new BlogAPI();

class BlogSearchResult extends Component{

    constructor(props){
        super(props);
        this.state={
            queryparam:"",
            blogs : [],
            currentPage:0,
            offset:0,
            limit:10,
            redirect:false,
            url:''
        }

        this.handleSearch = this.handleSearch.bind(this);
    }



    async componentDidMount(){
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const query = params.get('query');
        this.setState({
            queryparam:encodeURI(query)
        })

        await this.searchData();
    }



    searchData = async()=>{
        const {queryparam} = this.state;
        console.log(`blog query in search page is ${queryparam}`);
        const data = await blogAPI.searchBlogs(queryparam);
        this.setState({
            blogs:data.data
        })
    }



    handleSearch(searchText){
        window.location = `/blogs/search?query=${searchText}`
        this.setState({
            blogs : []
        })
    }





    render(){
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


export default BlogSearchResult;
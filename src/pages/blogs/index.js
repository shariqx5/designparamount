import React,{Component} from 'react';
import {Layout,BlogJumbotron,HelpAction} from '../../components';
import {BlogAPI} from '../../api';
import BlogPost from './blogPost';

const blogAPI = new BlogAPI();

class Blogs extends Component{

    constructor(props){
        super(props);
        this.state={
            loading : true,
            blogs : [],
            searchQuery:"",
            currentPage:0,
            offset:0,
            limit:10,
            redirect : false,
            url : ''
        }

        this.handleSearch = this.handleSearch.bind(this);
    }


    componentDidMount(){
        this.loadScripts();
        this.checkSearchParamExist();
    }



    loadScripts = ()=>{
        const scriptsPath = ["/js/stickyKit.js"];
        scriptsPath.map((scriptPath,i)=>{
            const script = document.createElement("script");
            script.src = scriptPath;
            script.async = true;
            document.body.append(script);
        });
    }



    checkSearchParamExist(){
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const query = params.get('search');
        if(query){
           const encodedQuery = encodeURI(query);
             this.setState({
                searchQuery:encodedQuery
            },()=>this.searchData());
        }
        else{
            this.fetchAllData();
        }
    }



    searchData = async()=>{
        const data = await blogAPI.searchBlogs(this.state.searchQuery);
        this.setState({
            blogs:data.data,
            loading : false
        })
    }



    fetchAllData = async()=>{
            const data = await blogAPI.fetchAllBlogs();
            this.setState({
                blogs:data.data,
                loading : false
            })
    }



    handleSearch(searchText){
        this.props.history.push(window.location.pathname+"?search="+searchText);
        searchText = encodeURI(searchText);
        this.setState({
            searchQuery:searchText,
            loading : true
        },()=>this.searchData());
        
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


export default Blogs;
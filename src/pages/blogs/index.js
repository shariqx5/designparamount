import React,{Component} from 'react';
import {Layout,BlogJumbotron,HelpAction} from '../../components';
import BlogPost from './blogPost';

class Blogs extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <Layout>
                <BlogJumbotron />
                <BlogPost />
                <HelpAction />
            </Layout>
        )
    }
}


export default Blogs;
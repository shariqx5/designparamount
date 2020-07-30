import {SERVER_ADDRESS} from '../config';

class BlogAPI {
    fetchAllBlogs = async()=>{
        const res = await fetch(SERVER_ADDRESS+"blog/get/fetch/recent",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        return data;
    }


    fetchAllCategories = async()=>{
        const res = await fetch(SERVER_ADDRESS+"blog/categories",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        return data;
    }


    fetchSinglePostDetails = async(postURL)=>{
        const res = await fetch(SERVER_ADDRESS+"/blog/get/fetch/"+postURL,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        console.log(data);
        return data;
    }
}


export default BlogAPI;
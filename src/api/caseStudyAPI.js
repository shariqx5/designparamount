import {SERVER_ADDRESS} from '../config';

class CaseStudyAPI {

    fetchAllCaseStudy = async()=>{
        const res = await fetch(SERVER_ADDRESS+"case_study/get/fetch/recent",{
            method:"GET"
        });

        const data = await res.json();
        return data;
    }


    fetchSinglePostDetails = async()=>{
        const res = await fetch(SERVER_ADDRESS+"case_study/get/fetch/types-of-logo-design",{
            method:"GET"
        });

        const data = await res.json();
        return data;
    }


    
    searchCaseStudy = async(query)=>{
        const res = await fetch(SERVER_ADDRESS+"case_study/get/search/"+query,{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        });

        const data = await res.json();
        return data;

    }
    
}


export default CaseStudyAPI;
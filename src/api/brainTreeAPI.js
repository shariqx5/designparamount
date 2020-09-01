import {SERVER_ADDRESS} from '../config';

class BrainTreeAPI{

    getClientToken = async()=>{
        const response = await fetch(SERVER_ADDRESS+"paynow/braintree_token",{
            method : 'GET'
        });

        const data = await response.json();

        return data;
    }



    submitForm = async(formObject)=>{
        const formData = new FormData();
        for(var key in formObject){
            formData.append(key,formObject[key]);
        }
        const response = await fetch(SERVER_ADDRESS+"paynow/paycredit",{
            method : "POST",
            body : formData
        });

        const data = await response.json();
        console.log(data);
        return data;
    }
}


export default BrainTreeAPI;
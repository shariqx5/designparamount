import {SERVER_ADDRESS} from '../../config';

class UserAPI {

    login = async(email , password)=>{
        
         const formData = new FormData();
         formData.append('email',email);
         formData.append('password',password);
         const response = await fetch(SERVER_ADDRESS+"login",{
             method:'POST',
             body:formData
         });

         const data = await response.json();

         return data;
    }
}



export default UserAPI;
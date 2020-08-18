import ValidationConfig from './ValidationConfig';

class UtilityValidationHelper {

    validateForm(name,value,error,rePassword=''){

        switch(name){
            case "firstname":
               if(value===""){
                   error.firstname="First name is required";
               }
               else if(!ValidationConfig.checkforvalidstring(value)){
                   error.firstname="First name should only contain string characters";
               }
               else{
                error.firstname=""
               }
               break;
            
            case "lastname":
                if(value===""){
                    error.lastname="Last name is required";
                }
                else if(!ValidationConfig.checkforvalidstring(value)){
                    error.lastname="Last name should only contain string characters";
                }
                else{
                    error.lastname=""
                   }
                break;
    
            case "email":
                if(value===""){
                    error.email="email is required";
                }
                else if(!ValidationConfig.checkforvalidemail(value)){
                    error.email="Invalid email format!!";
                }
                else{
                    error.email=""
                   }
                break;
    
            case "password":
                if(value===""){
                    error.password="Password is required";
                }
                else if(!ValidationConfig.checkforvalidpassword(value.toString())){
                    error.password="Length >8 characters && should contain upper and lower case with numbers and special characters";
                }
                else{
                    error.password=""
                   }
                break;
            
            case "reenterpassword":
                if(value===""){
                    error.reenterpassword="Password is required";
                }
                else if(!ValidationConfig.checkforsamepassword(rePassword,value)){
                    error.reenterpassword="Password doesn't match";
                }
                else{
                    error.reenterpassword=""
                   }
                break;
    
            case "contact":
                if(value===""){
                    error.contact="Contact number is required";
                }
                else if(!ValidationConfig.checkforvalidcontact(value)){
                    error.contact="Invalid Format , Enter without space and '-'";
                }
                else{
                    error.contact=""
                   }
                break;
            
            case "cnic":
                if(value===""){
                    error.cnic="Cnic Number is required";
                }
                else if(!ValidationConfig.checkforvalidcnic(value)){
                    error.cnic="Invalid Format , Enter without space and '-'";
                }
                else{
                    error.cnic=""
                   }
                break;
            default:
                break;
        }
    
        return error;
    }



    checkErrorExist = (error) => {
        let valid = true;
        Object.values(error).forEach(
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
}



export default UtilityValidationHelper;




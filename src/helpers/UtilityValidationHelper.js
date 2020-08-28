import ValidationConfig from './ValidationConfig';

const validation = new ValidationConfig();


class UtilityValidationHelper {

    validateForm(name,value,error,rePassword=''){

        switch(name){
            case "firstName":
               if(value===""){
                   error.firstname="First name is required";
               }
               else if(!validation.checkforvalidstring(value)){
                   error.firstname="First name should only contain string characters";
               }
               else{
                error.firstname=""
               }
               break;
            
            case "lastName":
                if(value===""){
                    error.lastname="Last name is required";
                }
                else if(!validation.checkforvalidstring(value)){
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
                else if(!validation.checkforvalidemail(value)){
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
                else if(!validation.checkforvalidpassword(value.toString())){
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
                else if(!validation.checkforsamepassword(rePassword,value)){
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
                else if(!validation.checkforvalidcontact(value)){
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
                else if(!validation.checkforvalidcnic(value)){
                    error.cnic="Invalid Format , Enter without space and '-'";
                }
                else{
                    error.cnic=""
                   }
                break;
            case "address":
                if(value === ""){
                    error.address = "Address is required"
                }
                else {
                    error.address = "";
                }
                break;
            case "city":
                if(value === ""){
                    error.city = "City is required";
                }
                else {
                    error.city = "";
                }
                break;
            case "zipcode":
                if(value === ""){
                    error.zipcode = "Zipcode is required";
                }
                else {
                    error.zipcode = "";
                }
                break;
            case "itemName":
                if(value === ""){
                    error.itemName = "Item name is required";
                }
                else if(!validation.checkforvalidstring()){
                    error.itemName = "Please enter valid input";
                }
                else {
                    error.itemName = "";
                }
                break;
            case "itemPrice":
                if(value === ""){
                    error.itemPrice = "Item price is required";
                }
                else if(!validation.checkforvaliddouble(value)){
                    error.itemPrice = "Item price must be numeric";
                }
                else{
                    error.itemPrice = "";
                }
                break;
            case "itemDiscount":
                if(value !==""){
                    if(!validation.checkforvaliddouble(value)){
                        error.itemDiscount = "Discount value must be numeric";
                    }
                    else{
                        error.itemDiscount = ""
                    }
                }
                else {
                    error.itemDiscount = ""
                }
                break;
            case "itemCategory":
                if(value === ""){
                    error.itemCategory = "Please select valid item category";
                }
                else{
                    error.itemCategory = ""
                }
                break;
            case "salesPerson":
                if(value === ""){
                    error.salesPerson = "Please select at least one sale person";
                }
                else{
                    error.salesPerson = "";
                }
                break;
            case "paymentGateway":
                if(value === ""){
                    error.paymentGateway = "Please select at least one payment gateway";
                }
                else{
                    error.paymentGateway = ""
                }
                break;
            case "saleType":
                if(value === ""){
                    error.saleType = "Please select at least on sale type";
                }
                else{
                    error.saleType = ""
                };
                break
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




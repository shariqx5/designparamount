

class ValidationConfig{

    constructor(){
        
    }


    checkforvalidstring(fullname){
        let nameregex=new RegExp(/^([a-zA-Z].*)$/);
        return nameregex.test(fullname)?true:false;
    }


    checkforvalidnumber(value){
        let valueRegex = new RegExp(/^([0-9]{4})$/);
        return valueRegex.test(value)?true:false;
    }


    checkforvalidemail(email){
        let validemailregex=new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
        if(validemailregex.test(email)){
            return true;
        }
        return false;
    }


    checkforvalidcnic(cnic){
        let cnicregex=new RegExp(/^([0-9]{13})$/i);
        return cnicregex.test(cnic)?true:false;
    }


    checkforvalidcontact(contact){
        let contactregex=new RegExp(/^(03[0-9]{9})$/i);
        return contactregex.test(contact)?true:false;
    }
    

    checkforsamepassword(password,reneterpassword){
        return password===reneterpassword?true:false;
    }


    checkforvalidpassword(password){
        let passwordregex=RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i);
        return passwordregex.test(password)?true:false;
    }

    
}



export default ValidationConfig;
import Cookies from 'js-cookie';

class CookiesHelper {

    setLoginCookies = ({token,name,email})=>{
        if(token!==undefined)  Cookies.set('authToken',token);
        if(email!==undefined) Cookies.set('email',email);
        if(name!==undefined) Cookies.set('name',name);
    }



    getCookie = (name)=>{
        return Cookies.get([name]);
    }

}



export default CookiesHelper;
import {AllHtmlEntities} from 'html-entities';
import utf8 from 'utf8';
var decoder = new TextDecoder('utf-8');


const entities = new AllHtmlEntities();

class StringHelper {

    extractSubString(value){
        value = this.decodeHtmlEntities(value);
        return value.substring(0,100);
    }


    decodeHtmlEntities(value){
        //value = decodeURI(value);
        value = entities.decode(value);
        return utf8.decode(value);
    }


    
    
}


export default StringHelper;
import {AllHtmlEntities} from 'html-entities';
import {Parser} from 'html-to-react';

const entities = new AllHtmlEntities();
const htmlToReactParser = new Parser();
class StringHelper {

    extractSubString(value){
        //value = this.decodeHtmlEntities(value);
        return value.substring(0,100);
    }


    decodeHtmlEntities(value){
       
        value = value.replace("\\","");
        value = entities.decode(value);
        const textarea = document.createElement("textarea");
        textarea.innerHTML = value;

        return htmlToReactParser.parse(textarea.value);
    }


    
    
}


export default StringHelper;
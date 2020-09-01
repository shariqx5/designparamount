import {SERVER_ADDRESS} from '../config';

class StripeAPI {

    loadStripeKeys = async()=>{
        const response = await fetch(SERVER_ADDRESS+"stripe/stripe_keys",{
            method : "GET"
        });

        const data = await response.json();
        return data;
    }
}


export default StripeAPI;
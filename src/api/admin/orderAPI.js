import {SERVER_ADDRESS} from '../../config';
import {CookiesHelper} from '../../helpers';


const cookiesHelper = new CookiesHelper();

class OrderAPI {

    getAllOrders = async(paymentStatus,search,limit,offset)=>{

        var url = SERVER_ADDRESS+"order/get/";
        const authToken = cookiesHelper.getCookie('authToken');
        
        if(paymentStatus!==0){
            url += `payment_status/${paymentStatus}/`;
        }

        if(search!==""){
            url += `search/${search}/`;
        }

        if(limit!==""){
            url += `limit/${limit}/`
        }


        if(offset!==""){
            url += `offset/${offset}/`;
        }

        const response = await fetch(url,{
            method : "GET",
            headers : {
                'Authorization':`Token ${authToken}`
            }
        });

        const data = await response.json();
        return data;
    }



    getPaymentStatus = async()=>{
        const response = await fetch(SERVER_ADDRESS+"order/payment_statuses",{
            method : "GET"
        });

        const data = await response.json();
        return data;
    }



    getSingleOrder = async(orderId)=>{

        const authToken = cookiesHelper.getCookie('authToken');

        const response = await fetch(SERVER_ADDRESS+`order/get/invoice_id/${orderId}`,{
            method : 'GET',
            headers : {
                'Authorization' : `Token ${authToken}`
            }
        });

        const data = await response.json();
        return data;
    }
}


export default OrderAPI;
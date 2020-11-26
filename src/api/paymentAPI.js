import {SERVER_ADDRESS} from '../config';

class PaymentAPI {


    getTokenData = async(token)=>{
        const response = await fetch(SERVER_ADDRESS+`stripe/index?token=${token}`,{
            method : "GET"
        });

        const data = await response.json();

        return data;
    }



    submitPaymentIntentRequest = async(payment_method_id,customer_detail)=>{
        const response = await fetch(SERVER_ADDRESS+"stripe/stripe_paymentIntent",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({payment_method_id,customer_detail})
        });

        const data = await response.json();
        return data;
    }



    submitPaymentIntent3DSecureRequest = async(payment_intent_id,customer_detail)=>{
        const response = await fetch(SERVER_ADDRESS+"stripe/stripe_paymentIntent_3d",{
            method : "POST",
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({payment_intent_id,customer_detail})
        });

        const data = await response.json();
        return data;
    }



    submitFailedRequest = async(requestData)=>{
        const formData = new FormData();
        for(var key in requestData){
            formData.append(key,requestData[key]);
        }
        console.log(formData);
        const response = await fetch(SERVER_ADDRESS+"stripe/insert_declined",{
            method : "POST",
            body : formData
        });


        const data = await response.json();
        return data;
    }



    submitSuccessRequest = async(requestData)=>{
        const formData = new FormData();
        for(var key in requestData){
            formData.append(key,requestData[key]);
        }
        console.log(formData);
        const response = await fetch(SERVER_ADDRESS+"stripe/insert_all_data",{
            method : "POST",
            body : formData
        });


        const data = await response.json();
        return data;
    }




    getItemCategory = async()=>{
        const response = await fetch(SERVER_ADDRESS+"payment/get_itemcategory",{
            method:"GET"
        });


        const data = await response.json();
        return data;
    }



    getSalePersons = async()=>{
        const response = await fetch(SERVER_ADDRESS+"payment/get_salesman",{
            method:"GET"
        });

        const data = await response.json();
        return data;
    }




    generatePaymentLink = async(formObject)=>{
        const formData = new FormData();
        for(var key in formObject){
            formData.append(key,formObject[key])
        }
        //converting object into formdata
        const response = await fetch(SERVER_ADDRESS+"payment/generate_link",{
            method:"POST",
            body : formData
        });

        const data = await response.json();
        return data;
    }




    applyCoupon = async(coupon)=>{
        const response = await fetch(SERVER_ADDRESS+`payment/redeem_coupon/${coupon}`,{
            method : "GET"
        });


        const data = await response.json();
        return data;
    }



    generatePaymentLink = async(price, currency, packageType, itemName = 'Dummy Logo')=>{
        itemName = encodeURI(itemName);
        packageType = encodeURI(packageType);
        const response = await fetch(SERVER_ADDRESS+`payment/pay_now_link/${itemName}/${price}/${packageType}/${currency}`, {
            method : "GET"
        });
    
        const data = await response.json();
        console.log(data);
        return data;
    }

}



export default PaymentAPI;
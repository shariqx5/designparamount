class URLHelper{

    constructor(){
        this.urls = {
            "about":"/about",
            "brand-design":"/brand-design",
            "blogs":"/blogs",
            'case-study':'/case-study',
            "client":"/client",
            "client-orders":"/client/orders",
            "client-orders-detail":"/client/orders/detail",
            "client-orders-invoice":"/client/orders/detail/invoice",
            "contact":"/contact",
            "hire-designer":"/hire-designer",
            "login":'/login',
            "logo-design":"/logo-design",
            "privacy":"/privacy",
            "pricing":'/pricing',
            "portfolio":"/portfolio",
            "payment-stripe":'/payment/stripe',
            "payment-braintree":'/payment/braintree',
            "payment-generate":"/payment/generator",
            "payment-generate-link":'/payment/generator/link',
            "payment-failed":'/payment/failed',
            "payment-success":"/payment/success",
            "payment-expired":"/payment/expired",
            'request':'/request',
            "terms":'/terms',
            "web-design":"/web-design",
        }
    }



    getURL = (key)=>{
        return this.urls[key];
    }
}


export default URLHelper;
import React,{Component} from 'react';
import PendingContainer from './pendingContainer';
import {OrderAPI} from '../../../../api';
import './pending.css';


const orderAPI = new OrderAPI();

class PendingOrders extends Component{

    state = {
        heads : ["S.No","Order Name","Order Type","Price","Payment Status","Date"],
        offset : 0,
        perPage : 5,
        currentPage : 0,
        pageCount : 0,
        paymentFilters : [],
        orders : [],
        slicedData : [],
        isLoading : true,
        paymentStatus : 0,
        search : ''
    }


    componentDidMount(){
        //loading filters
        this.getPaymentFilters();
        this.getClientOrders();
        
    }



    componentDidUpdate(prevProps,prevState){
        const {paymentStatus} = this.state;
        if(prevState.paymentStatus!== paymentStatus){
            this.getClientOrders();
        }
    }



    getPaymentFilters = async()=>{
        const response = await orderAPI.getPaymentStatus();
        if(response.status === 'success'){
            const {data} = response;
            this.setState({
                paymentFilters : data
            })
        }
    }

    

    getClientOrders = async()=>{
        const {paymentStatus,search,perPage,currentPage} = this.state;
        this.setState({
            isLoading : true
        });
        const response = await orderAPI.getAllOrders(paymentStatus,search,"",perPage*currentPage);
        if(response.status === 'success'){
            const pageCount = Math.ceil(response.data.length/this.state.perPage);
            this.setState({
                orders : response.data
            },
            ()=>this.getDataForOnePage())
        }
        else{
            console.log(response);
            this.setState({
                isLoading : false
            });
        }
    }



    changePaymentStatus = (event)=>{
        event.preventDefault();
        const {value} = event.target;
        this.setState({
            paymentStatus : value
        })
    }



    handlePageClick = (e) =>{
        const {perPage} = this.state;
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        this.setState({
            currentPage : selectedPage,
            offset
        },()=>{
           this.getDataForOnePage()
        })

   }



   getDataForOnePage = ()=>{
        let {offset,perPage} = this.state;
        var orders = this.state.orders;
        const slicedData = orders.slice(offset,offset+perPage);
        this.setState({
            pageCount : Math.ceil(orders.length/perPage),
            slicedData,
            isLoading : false
        })
    }




    submitForm = (event) => {
        event.preventDefault();
            var input = document.getElementById("search-input");
            this.setState({
                search : input.value
            },()=>this.getClientOrders());
    }





    render(){
        return(
            <PendingContainer 
            {...this.state}
            changePaymentStatus = {this.changePaymentStatus}
            handlePageClick = {this.handlePageClick}
            submitForm = {this.submitForm}
            />
        )
    }
}


export default PendingOrders;
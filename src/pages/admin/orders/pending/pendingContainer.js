import React from 'react';
import {ClientLayout,Pagination,LoadingTable} from '../../../../components';
import {ArrayHelper} from '../../../../helpers';
import PendingTable from './pendingTable';


const arrayHelper = new ArrayHelper();

class PendingContainer extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            heads : 6
        }
    }


    render(){
        return(
            <ClientLayout>
                <div className="row" id="filters">
                        <div className="col-sm-1">
                            <label for="order_status">Orders</label>
                        </div>
                        <div className="col-sm-5 text-left">
                            <select name="orderStatus" className="form-control col-sm-6" onChange={this.props.changePaymentStatus}>
                                <option value="0">All</option>
                                {this.props.paymentFilters.length>0?(
                                    this.props.paymentFilters.map((paymentFilter,i)=>{
                                    return <option key={i} value = {paymentFilter.id}>{paymentFilter.payment_status}</option>
                                    })
                                ):<option>No Filter Found</option>}
                            </select>
                        </div>
                        <div className="col-md-3 offset-sm-3 text-right">
                            <form onSubmit={this.props.submitForm}>
                                <input id="search-input" type="text" name = "searchText" placeholder="Search" className="blog-form-input" contentEditable={true}/> 
                                <i class="fas fa-search"></i>
                            </form>
                        </div>
                </div>
                    {this.props.isLoading?<LoadingTable rows = {arrayHelper.generateRandomArray(this.props.perPage)} columns = {arrayHelper.generateRandomArray(this.state.heads)}/>:<PendingTable offset = {this.props.offset}  heads={this.props.heads} orders={this.props.slicedData}/>}
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Showing results 10 of 100</p>
                        </div>
                        <div className="col-sm-2 text-right">
                            <Pagination pageCount = {this.props.pageCount} handlePageClick = {this.props.handlePageClick}/>
                        </div>
                    </div>
            </ClientLayout>
        )

    }
}


export default PendingContainer;
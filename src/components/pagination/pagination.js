import ReactPaginate from 'react-paginate';
import React,{Component} from 'react';
import './pagination.css';

class Pagination extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ReactPaginate 
             previousLabel={"prev"}
             nextLabel={"next"}
             breakLabel={"..."}
             breakClassName={"break-me"}
             pageCount={this.props.pageCount}
             marginPagesDisplayed={2}
             pageRangeDisplayed={5}
             onPageChange = {this.props.handlePageClick}
             containerClassName = {"pagination"}
             subContainerClassName = {"pages pagination"}
             activeClassName = {"active"}
            />
        )
    }

}


export default Pagination;
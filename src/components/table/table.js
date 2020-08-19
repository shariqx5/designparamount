import React,{Component} from 'react';

class Table extends Component{

    render(){
        return(
            <div className="table-responsive">
            <table className="table table-hover table-bordered text-center">
                <thead>
                   {this.props.heads.map((head,i)=>{
                        return <th>{head}</th>
                   })}
                </thead>
                <tbody id="data-table">
                    {this.props.children}
                </tbody>
            </table>
           
            </div>
        )
    }
}


export default Table;
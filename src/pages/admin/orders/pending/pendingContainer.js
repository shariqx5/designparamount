import React from 'react';
import {ClientLayout} from '../../../../components';
import PendingTable from './pendingTable';

class PendingContainer extends React.Component{


    constructor(props){
        super(props);
    }


    render(){
        return(
            <ClientLayout>
                <PendingTable {...this.props}/>
                <div className="row">
                    <div className="col-sm-6">
                        <p>Showing results 10 of 100</p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <p>Pagination</p>
                    </div>
                </div>
    </ClientLayout>
        )

    }
}


export default PendingContainer;
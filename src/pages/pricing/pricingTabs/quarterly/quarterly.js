import React,{Component} from 'react';
import {UltimateTable,ProTable,StandardTable} from '../../../../components';

class Quarterly extends Component{

    render(){
        return(
            <div role="tabpanel" className="tab-pane fade" id="quarterly">
                <div className="row">
                	<div className="col-md-4">
                		<StandardTable />
                    </div>
                	<div className="col-md-4">
                	    <ProTable />
                    </div>
                	<div className="col-md-4">
                		<UltimateTable />		
                    </div>
                </div>
            </div>
        )
    }
}


export default Quarterly;
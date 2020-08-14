import React,{Component} from 'react';
import {ClientLayout,Table} from '../../../../components';

class PendingOrders extends Component{

    state = {
        heads : ["S.No","Order Name","Order Type","Price","Payment Status","Date"]
    }

    render(){
        return(
            <ClientLayout>
                <Table heads={this.state.heads}>
                    <tr>
                        <td>1</td>
                        <td><a href="#">Prochain Logo Design</a></td>
                        <td>Logo Design</td>
                        <td>$300</td>
                        <td>Unpaid</td>
                        <td>14 August 2020</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><a href="#">Prochain Logo Design</a></td>
                        <td>Logo Design</td>
                        <td>$300</td>
                        <td>Unpaid</td>
                        <td>14 August 2020</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><a href="#">Prochain Logo Design</a></td>
                        <td>Logo Design</td>
                        <td>$300</td>
                        <td>Unpaid</td>
                        <td>14 August 2020</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><a href="#">Prochain Logo Design</a></td>
                        <td>Logo Design</td>
                        <td>$300</td>
                        <td>Unpaid</td>
                        <td>14 August 2020</td>
                    </tr>
                </Table>
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


export default PendingOrders;
import React,{Component} from 'react';
import Table from './table';
import Skeleton from 'react-loading-skeleton';


class LoadingTable extends Component{

    constructor(props){
        super(props);
        this.state = {
            heads : []
        }
    }


    render(){    

        const heads = [];
        const {rows,columns} = this.props;
        for(let i = 0; i< columns.length; i++){
            heads.push(<Skeleton height={30}/>);
        }

        return(
            <Table heads = {heads}>
                {rows.map((element,i)=>(
                        <tr key={i}>
                            {columns.map((element,i)=>(
                                <td key={i}><Skeleton height={15}/></td>
                            ))}
                        </tr>
                ))}
            </Table>
        )
    }
}


export default LoadingTable;
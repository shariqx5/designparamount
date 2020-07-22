import React,{Component} from 'react';
import AddDesigner from './addDesigner';

class UltimateDesigner extends Component{

    render(){
        return(
            <AddDesigner 
            designerCategory={"Ultimate"}
            designerPrice={"995"}
            timePeriod={"Monthly"}
            categoryImage={"3.png"}
            categoryClass={"pro_designer"}
            />
        )
    }
}


export default UltimateDesigner;
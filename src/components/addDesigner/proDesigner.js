import React,{Component} from 'react';
import AddDesigner from './addDesigner';

class ProDesigner extends Component{

    render(){
        return(
            <AddDesigner 
            designerCategory={"Pro"}
            designerPrice={"990"}
            timePeriod={"Monthly"}
            categoryImage={"2.png"}
            categoryClass={"pro_designer"}
            />
        )
    }
}


export default ProDesigner;
import React,{Component} from 'react';
import AddDesigner from './addDesigner';

class StandardDesigner extends Component{

    render(){
        return(
            <AddDesigner 
            designerCategory={"Standard"}
            designerPrice={"550"}
            timePeriod={"Monthly"}
            categoryImage={"1.png"}
            />
        )
    }
}


export default StandardDesigner;
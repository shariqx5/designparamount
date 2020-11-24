import React,{Component} from 'react';
import {IKImage,IKContext} from 'imagekitio-react';

class ImageOptimizer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <IKContext publicKey="public_4d43QSCv1xP4Ru7eHBM5AxavJbQ=" urlEndpoint="https://ik.imagekit.io/at5aqbaoyt">
                <IKImage path={this.props.path} transformation={this.props.transformation!==""?this.props.transformation:""} lqip={this.props.lqip!==""?this.props.lqip:""}/>
            </IKContext>
        )
    }
}


export default ImageOptimizer;
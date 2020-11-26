import React,{Component} from 'react';
import {IKImage,IKContext} from 'imagekitio-react';
import {IMAGE_SERVER_ADDRESS} from '../../config';

class ImageOptimizer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <IKContext publicKey="public_rIfzI+dnI1IXJCgeszDq873jm9E=" urlEndpoint={IMAGE_SERVER_ADDRESS}>
                <IKImage className={this.props.className} path={this.props.path} transformation={this.props.transformation!==""?this.props.transformation:""} lqip={this.props.lqip!==""?this.props.lqip:""} className={this.props.className}/>
            </IKContext>
        )
    }
}


export default ImageOptimizer;
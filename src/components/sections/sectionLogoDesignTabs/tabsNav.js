import React,{Component} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


class TabsNav extends Component{

    render(){
        return(<ul className="nav nav-tabs serivces-tabs-new" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" href="#wordmark-logo-service" role="tab" data-toggle="tab">Word Mark Logo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#abstract-logo-service" role="tab" data-toggle="tab">Abstract Logo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#illustrative-logo-service" role="tab" data-toggle="tab">Illustrative Logo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#emblem-logo-service" role="tab" data-toggle="tab">Emblem Logo</a>
            </li>
        </ul>)
    }
}



export default TabsNav;
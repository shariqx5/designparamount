import React,{Component} from 'react';


class TabsNav extends Component{

    render(){
        return(<ul className="nav nav-tabs serivces-tabs-new" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" href="#wordmark-logo-service" role="tab" data-toggle="tab">HTML</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#abstract-logo-service" role="tab" data-toggle="tab">CMS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#illustrative-logo-service" role="tab" data-toggle="tab">E-Commerce</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#emblem-logo-service" role="tab" data-toggle="tab">Portal</a>
            </li>
        </ul>)
    }
}



export default TabsNav;
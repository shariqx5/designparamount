import React,{Component} from 'react';
import './clientLayout.css';

class ClientLayout extends Component{


    state = {
      showSidebar : ""
    }


    componentDidMount(){
        const scriptsSrc = ["vendor/jquery/jquery.min.js","vendor/bootstrap/js/bootstrap.bundle.min.js"];
       
        scriptsSrc.map((scriptSrc,i)=>{
            const script = document.createElement("script");
            script.src = scriptSrc;
            script.async = true;
            document.body.append(script);
        });

    }


    onClick = (event)=>{
        event.preventDefault();
        const showSidebar = this.state.showSidebar !==""?"":"toggled";
        this.setState({
          showSidebar
        })
    }


    render(){
        return(
        <div className={this.state.showSidebar !== ""?`d-flex ${this.state.showSidebar}`:"d-flex"} id="wrapper">
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Start Bootstrap </div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
                </div>
            </div>
            <div id="page-content-wrapper">

            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" id="topNavbar">
              <button type="button" id="menu-toggle" className="btn btn-info" onClick={this.onClick}>
                 <i className="fas fa-align-left"></i>
              </button>

      
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
      
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Muhammad Shariq
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
      
            <div className="container-fluid">
              <h1 className="mt-4">Simple Sidebar</h1>
              <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
              <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
            </div>
          </div>
        </div>
        )
    }
}


export default ClientLayout;
import React,{Component} from 'react';
import {CookiesHelper} from '../../helpers';
import {Link,Redirect} from 'react-router-dom';
import './clientLayout.css';


const cookiesHelper = new CookiesHelper();
class ClientLayout extends Component{


  constructor(props){
      super(props);
  }


    state = {
      sidebarCollapse : "",
      showSidebar : "",
      showContent : "",
      collapseIn : "",
      name : '',
      email : '',
      redirect : false,
      url : ''
    }


    componentDidMount(){

      this.loadCSS();
      this.loadCookies();

      const scriptSrc = ["https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js",
                         "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"
                      ];

      scriptSrc.map((scriptSrc,i)=>{
        const script = document.createElement("script");
                script.src = scriptSrc;
                script.async = true;
                document.body.append(script);
      });

    }



    loadCSS = ()=>{
        const cssSrcs = ["https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css",
                        "/css/admin-panel.css"];

        cssSrcs.map((cssSrc,i)=>{
          const link = document.createElement("link");
          link.href = cssSrc;
          link.rel = "stylesheet";
          document.head.append(link);
        });

    }



    loadCookies = ()=>{
        const name = cookiesHelper.getCookie('name');
        const email = cookiesHelper.getCookie('email');
        this.setState({
            name,
            email
        })
    }



    onClick = (event)=>{
        event.preventDefault();
        const sidebarCollapse = this.state.sidebarCollapse !== ""?"":"active";
        const showSidebar = this.state.showSidebar !==""?"":"active";
        const showContent = this.state.showContent !==""?"":"active";
        const collapseIn = this.state.collapseIn !==""?"":"in";
        this.setState({
          showSidebar,
          showContent,
          collapseIn
        })
    }




    logout = (event)=>{
        event.preventDefault();
        cookiesHelper.removeLoginCookies();
        this.setState({
            redirect : true,
            url : "/"
        })
    }

  

    render(){

    
      const {redirect, url} = this.state;
      if(redirect){
          return(
              <Redirect to={url} />
          )
      }

      return(
        <div className="wrapper">
        <nav id="sidebar" className={this.state.showSidebar!==""?this.state.showSidebar:""}>
            <div className="sidebar-header">
                <h3>
                  <a href="/">
                              <img alt="Logo-Header" src="/images/logo-header.svg" className="logo-wid" />
                  </a>
                </h3>
            </div>

            <ul className="list-unstyled components">
                <p>{this.state.name}</p>
                <li className="active">
                    <Link to="/client/orders">Orders</Link>
                </li>
            </ul>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content" className={this.state.showContent!==""?this.state.showContent:""}>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className={this.state.sidebarCollapse!==""?`navbar-btn ${this.state.sidebarCollapse}`:"navbar-btn"} onClick={this.onClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className={this.state.collapseIn!==""?`collapse navbar-collapse ${this.state.collapseIn}`:""} id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><Link to="/">Home</Link></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  {this.state.email}
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="#" onClick = {this.logout}>Logout</a>
                                  {/* <a class="dropdown-item" href="#">Another action</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Something else here</a> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children}
        </div>
    </div>
      )
    }
}


export default ClientLayout;
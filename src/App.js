import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './hoc/privateRoute';

//Pages
import Home from './pages/home';
import Ultimate from './pages/ultimate';
import Pro from './pages/pro';
import Standard from './pages/standard';
import Portfolio from './pages/portfolio';
import Pricing from './pages/pricing/pricing';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import HireDesigner from './pages/hireDesigner/hireDesigner';
import Blogs from './pages/blogs/index';
import SingleBlogPost from './pages/blogs/singleBlogPost';
import CaseStudies from './pages/caseStudies';
import SingleCaseStudy from './pages/caseStudies/singleCaseStudy';
import Request from './pages/request';
import FourZeroFour from './pages/fourZeroFour';
import Login from './pages/login/login';
import ClientHome from './pages/admin/home';
import PendingOrders from './pages/admin/orders/pending/pending';
import OrderDetails from './pages/admin/orders/orderDetails';

class App extends React.Component{

   componentDidMount(){
      const script = document.createElement("script");
      script.src =  "/js/element-mouse-mover.js";
      script.async = true;
      document.body.append(script);
   }

   render(){
     return(
        <Router>
           <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/ultimate" component={Ultimate} />
              <Route exact path="/pro" component={Pro}/>
              <Route exact path="/standard" component={Standard}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/pricing" component={Pricing}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/hire-designer" component={HireDesigner}/>
              <Route exact path="/blogs" component={Blogs}/>
              <Route exact path="/request" component={Request}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/blogs/:title" component={SingleBlogPost}/>
              <Route exact path="/case-study" component={CaseStudies} />
              <Route exact path="/case-study/:title" component={SingleCaseStudy}/>
              <PrivateRoute exact path="/client" component={ClientHome}/>
              <PrivateRoute exact path="/client/pending-orders" component={PendingOrders}/>
              <PrivateRoute exact path="/client/pending-orders/detail" component={OrderDetails} />
              <Route component={FourZeroFour}/>
           </Switch>
        </Router>
     )
   }
}


export default App;

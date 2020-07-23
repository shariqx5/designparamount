import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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

class App extends React.Component{
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
           </Switch>
        </Router>
     )
   }
}


export default App;

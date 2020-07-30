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
import Blogs from './pages/blogs/index';
import SingleBlogPost from './pages/blogs/singleBlogPost';

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
              <Route exact path="/blogs/:title" component={SingleBlogPost}/>
           </Switch>
        </Router>
     )
   }
}


export default App;

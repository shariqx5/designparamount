import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import Home from './pages/home';
import Ultimate from './pages/ultimate';

class App extends React.Component{
   render(){
     return(
        <Router>
           <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/ultimate" component={Ultimate} />
           </Switch>
        </Router>
     )
   }
}


export default App;

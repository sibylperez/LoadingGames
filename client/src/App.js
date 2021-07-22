import './App.css';
import React  from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Search from './Containers/Search/Search';
import Home  from './Containers/Home/Home';
import Details from './Containers/Details/Details';
import Create from './Containers/Create/Create';

export default function App() {
  return (
<React.Fragment>
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/'>
    <Route path='/home' component={NavBar} />   
    <Route exact path= '/home' component= {Home}/>
    <Route path='/loadgames' component={NavBar} />
    <Route path='/newgame' component={NavBar} />
    <Route exact path='/loadgame/:id' render={({ match }) => < Details id={match.params.id} />}/>
    <Route exact path='/loadgames/:name' component={Search} />
    <Route path="/newgame" exact component={Create} />
    </Route>
  </Switch>
</React.Fragment>
  );
}




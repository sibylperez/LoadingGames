import './App.css';
import React  from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Landing/Landing';
import Home  from './Containers/Home/Home';
import Details from './Containers/Details/Details';
import Create from './Containers/Create/Create';

export default function App() {
  return (
<React.Fragment>
        <Route exact path='/' component={Landing} />
          <Route path='/home' component={NavBar} />   
          <Route exact path= '/home' component= {Home}/>
          <Route exact path= '/create' component= {Create}/>
          <Route exact path='/videogame/:id' render={({ match }) => < Details id={match.params.id} />}/>
   </React.Fragment>
  );
}




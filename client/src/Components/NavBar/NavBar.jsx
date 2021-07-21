import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filters from '../../Containers/Filters/Filters'
import style from './NavBar.module.css'

export default function NavBar() {

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }
 
return (
<React.Fragment>
  <nav className={style.navbar}>
  <Link className= {style.linkhover} to='/home'>
    <h2 className= {style.titleNav}>Loading Games...</h2>
  </Link>
    <div>
      <Filters />
    </div>
    <div>
    <div>
       <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Loading videogame..."
                type="text">
              </input>
              <Link to={`/loadgames/${name}`}>
                <button type="submit"> PLAY! </button>
              </Link>
            </div>
          </form>
        </div>
    </div>
  </nav>
</React.Fragment>
)}
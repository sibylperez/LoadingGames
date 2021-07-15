import React from 'react';
import { Link } from 'react-router-dom';
import Filters from '../../Containers/Filters/Filters'
import Search  from '../../Containers/Search/Search';
import style from './NavBar.module.css'

export default function NavBar() {
 
return (
<React.Fragment>
  <nav className={style.navbar}>
  <Link to='/home'>
    <h2>Loading Games...</h2>
  </Link>
    <div>
      <Filters />
    </div>
    </nav>
    <div>
      <Search />
    </div>
</React.Fragment>
)}
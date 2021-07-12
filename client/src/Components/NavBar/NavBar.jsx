import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../Containers/Search/Search';
import style from './NavBar.module.css'

export default function NavBar() {

return (
<nav className={style.navbar}>
  <h3>Loading Games...</h3>
  <div>
    <Link to='/home'>
    <h2>Home</h2>
    </Link>
  </div>
  <div>
    <Link to='/add'>
    <h2>New Videogame</h2>
    </Link>
  </div>
  <Search />
</nav>
)}
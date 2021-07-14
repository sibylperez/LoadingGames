import React from 'react';
import Filters from '../../Containers/Filters/Filters'
import Search  from '../../Containers/Search/Search';
import style from './NavBar.module.css'



export default function NavBar() {
 

return (
<React.Fragment>
  <nav className={style.navbar}>
    <h3>Loading Games...</h3>
    <div>
      <Filters />
    </div>
    </nav>
    <div>
      <Search />
    </div>
</React.Fragment>
)}
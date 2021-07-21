import React, {useEffect}  from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterByGenre, filterOrigin, orderAsc, orderDesc} from '../../Actions/index';
import style from './Filters.module.css'

export default function Filter() {
  const dispatch = useDispatch()
  const genres = useSelector(store => store.genres);
    
    
  useEffect(() => {
    dispatch(getGenres())
}, [dispatch]);
    
    
//Filtrar x genero
  const handleFilterGenre = (e) => {
    dispatch(filterByGenre(e.target.value))
}

    
// Ordenado
  const handleOrder = (e) => {
    if (e.target.value === "AZ" || e.target.value === "asc") {
      dispatch(orderAsc(e.target.value));
    } else if (e.target.value === "ZA" || e.target.value === "desc") {
      dispatch(orderDesc(e.target.value));
    } else {
      dispatch(filterByGenre(e.target.value));
    }
  };

// Origin
  const handleOrigin = (e) => {
    if(e.target.value === "Created") {
      dispatch(filterOrigin(e.target.value))
    } else {
        dispatch(filterByGenre(e.target.value))
    }
  }

return (

<React.Fragment>
 <div className={style.gamesgrid}>
 
  <Link className={style.linkF} to = '/newgame'>
    <button className={style.btnF} >Add New</button>
  </Link>

  <select onChange={(e) => handleOrigin(e)}>
    <option default> Origins </option>
    <option value="Created">My Games</option>
  </select>

  <select onChange={(e) => handleFilterGenre(e)}>    
    <option default> ♦♠ Genres ♣♥</option>
    {genres.map((G) => (
    <option key={G.id} value={G.name}>{G.name}</option>))} 
    </select>

  <select onChange={(e) => handleOrder(e)}>
    <option default Value="All"> ↑Order↓ </option>
    <option value="AZ">Order to A-Z</option>
    <option value="ZA">Order to Z-A</option>
    <option value="desc">Top Rating</option>
    <option value="asc">Low Rating</option>
  </select>
  </div>
</React.Fragment>
)}

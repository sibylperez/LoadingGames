import React, {useEffect}  from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { resetAll, orderAZ, orderZA,  orderAsc, orderDesc, getGenres, filterByGenre, filterOrigin, displayGames } from '../../Actions/index';
import style from './Filters.module.css'

export default function Filter() {
  const dispatch = useDispatch()
  const displaygames = useSelector (state => state.displayGames)
  const order = useSelector(state => state.filteredVideogames)
  const videogames = useSelector(state => state.videogames)
  const genres = useSelector(state => state.genres);
    
    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);
    
    
    //Filtrar x genero
const handleFilterGenre = (e) => {
  dispatch(filterByGenre(e.target.value)) 
  dispatch(resetAll(displaygames))     
}

    
    // Ordenado
  function handleOrderAZ() {
    dispatch(orderAZ(order))
    dispatch(resetAll(displaygames))
  }

  function handleOrderZA() {
    dispatch(orderZA(order))
    dispatch(resetAll(displaygames))
  }

  function handleOrderAsc() {
    dispatch(orderAsc(order))
    dispatch(resetAll(displaygames))
  }

  function handleOrderDesc() {
    dispatch(orderDesc(order))
    dispatch(resetAll(displaygames))
  }

 
const handleOrder = (e) => {
  if (e.target.value === "AZ") {
    return handleOrderAZ();
  } else if (e.target.value === "ZA") {
    return handleOrderZA();
  } else if (e.target.value === "asc") {
    return handleOrderAsc();
  } else if (e.target.value === "desc") {
    return handleOrderDesc();
  } 
}

const handleOrigin = (e) => {
  if(e.target.value === "Created") {
    dispatch(filterOrigin(e.target.value))
    dispatch(displayGames(order))
} else if (e.target.value === "All"){
  dispatch(displayGames(videogames))
  }
}

return (

<React.Fragment>
 <div className={style.gamesgrid}>
 
  <Link to = '/create'>
    <button>Add New</button>
  </Link>

  <select onChange={(e) => handleOrigin(e)}>
    <option default> Origins </option>
    <option value="Created">My Games</option>
    <option value="All">All Games</option>
  </select>

  <select onChange={(e) => handleFilterGenre(e)}>    
    <option selected> ♦♠ Genres ♣♥</option>{genres.map((G) => (
    <option key={G.id} value={G.name}>{G.name}</option>))} 
    </select>

  <select onChange={(e) => handleOrder(e)}>
    <option default> ↑Order↓ </option>
    <option value="AZ">Order to A-Z</option>
    <option value="ZA">Order to Z-A</option>
    <option value="asc">Top Rating</option>
    <option value="desc">Low Rating</option>
  </select>
  </div>
</React.Fragment>
)}

import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAll, orderAZ, orderZA,  orderAsc, orderDesc, displayGames } from '../../Actions/index';
import style from './Filters.module.css'

export default function Filter() {
  const order = useSelector(state => state.filteredVideogames)
  
  const dispatch = useDispatch()
 
  function handleOrderAZ() {
    dispatch(orderAZ(order))
    dispatch(resetAll())
  }

  function handleOrderZA() {
    dispatch(orderZA(order))
    dispatch(resetAll())
  }

  function handleOrderAsc() {
    dispatch(orderAsc(order))
    dispatch(resetAll())
  }

  function handleOrderDesc() {
    dispatch(orderDesc(order))
    dispatch(resetAll())
  }

// Ordenado
const handleOrder = (e) => {
  if (e.target.value === "AZ") {
    return handleOrderAZ();
  } else if (e.target.value === "ZA") {
    return handleOrderZA();
  } else if (e.target.value === "asc") {
    return handleOrderAsc();
  } else if (e.target.value === "desc") {
    return handleOrderDesc();
  } else {
    return displayGames();
  }
}


return (

<React.Fragment>
 <div className={style.gamesgrid}>
   <div>New Games</div>
  <select>
    <option value="All" default>All</option>
    <option value="new">New Games</option>
    <option value="create">Order to Z-A</option>
  </select>

  <div>Genres</div>
  <select>
    <option value="All" default>All</option>
  </select> 

  <div>Order</div>
  <select onChange={(e) => handleOrder(e)}>
    <option value="All" default>All</option>
    <option value="AZ">Order to A-Z</option>
    <option value="ZA">Order to Z-A</option>
    <option value="asc">Top Rating</option>
    <option value="desc">Low Rating</option>
  </select>
  </div>
</React.Fragment>
)}

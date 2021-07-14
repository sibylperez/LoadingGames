import React  from "react";
import { useDispatch } from "react-redux";
import { getVideogames ,orderAZ, orderZA,  orderAsc, orderDesc } from '../../Actions/index';
import style from './Filters.module.css'

export default function Filter() {
const dispatch = useDispatch()

// Ordenado
const handleOrder = (e) => {
  if (e.target.value === "AZ") {
    dispatch(orderAZ(e.target.value));
  } else if (e.target.value === "ZA") {
    dispatch(orderZA(e.target.value));
  } else if (e.target.value === "asc"){
    dispatch(orderAsc(e.target.value)) ; 
  } else if (e.target.value === "desc"){
    dispatch(orderDesc(e.target.value))  
  }else {
    dispatch(getVideogames());
  }
};

console.log(orderAZ())
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
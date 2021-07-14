import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({id, name, genres, platforms, rating, img}) {
//console.log(id)
return (
<React.Fragment>
<div>
    <div className={style.card}>
        <img className= {style.imagen} src={img} alt={img} />
        <div className={style.cnt}>
        <div>{rating}</div>
        <div>{name}</div>
        <div>{genres}</div>
        <div>{platforms}</div>
        </div>
        <Link to={`/videogame/${id}`}> <button className = {style.btn} type='submit'>More info</button></Link>
    </div>
</div>
</React.Fragment>
)}
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({id, name, genres, platforms, rating, img}) {
//console.log(id)
    return (

 <div>
    <div className = {style.card}>
        <img src={img} alt= {img} />
        <div>{name}</div>
    </div>

    <div>
        <div>{name}</div>
        <div>{genres}</div>
        <div>{platforms}</div>
        <div>{rating}</div>
        <Link to={`/videogame/${id}`}>
            <button type='submit'>More info</button>
        </Link>
    </div>
</div> 
)}
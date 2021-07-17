import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({id, name, genres, platforms, rating, img}) {

return (
<React.Fragment>
<div>
    <div className={style.card}>
        <div className ={style.box}>
            <div className= {style.content}>
                <div className={style.cnt}>
                    <img className= {style.imagen} src={img} alt={img} />
                    <div className={style.name}>{name}</div>
                    <div className= {style.rating}>⭐{rating} ⭐</div>
                    <div className={style.para}>Genres: {genres}</div>
                    <div className={style.para}>Platforms: {platforms}</div>
                    <Link to={`/videogame/${id}`}> <button className = {style.btn} type='submit'>More info</button></Link>
                </div>
            </div>
        </div>
    </div>
</div>
</React.Fragment>
)}
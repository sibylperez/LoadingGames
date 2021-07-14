import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Videogames.module.css'


export default function Videogames () {
    const displaygames = useSelector(state => state.displayGames)
    

    //console.log(videogames)
return (
    
<div className= {style.gamesgrid} >
    {displaygames.length === 0 ? <div>Cargando...</div> :
    (displaygames && displaygames.map((e) =>{
        return <Card 
    key = {e.id}
    id = {e.id}
    name = {e.name}
    genres = {e.genres}
    platforms = {e.platforms}
    img = {e.img} 
    rating= {e.rating} />})
    )} 
</div>
)};
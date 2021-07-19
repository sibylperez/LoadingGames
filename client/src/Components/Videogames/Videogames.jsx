import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Loading from '../../Containers/Loading/Loading'
import style from './Videogames.module.css'
import ImgDefault from '../../Resourses/ImgDefault.jpg'


export default function Videogames () {
    const displaygames = useSelector(state => state.displayGames)
    const filtergames = useSelector (state => state.filteredVideogames)

    //Paginado
    const [count, setCount] = useState(1)
    let num1 = 15 * (count - 1);
    let num2 = 15 * count
    
return (
<div>
    <div className= {style.gamesgrid} >
    {displaygames.length > 0 ? displaygames.slice(num1, num2).map(e =>
         <Card 
            key = {e.id}
            id = {e.id}
            name = {e.name}
            genres = {e.id.length > 8 ? e.genres.map(c => c.name) : 
            e.genres}
            platforms = {e.platforms}
            img = {e.img || ImgDefault} 
            rating= {e.rating} />):
    filtergames.length > 0 ? filtergames.slice(num1, num2).map(e =>
         <Card 
            key = {e.id}
            id = {e.id}
            name = {e.name}
            genres = {e.id.length > 8 ? e.genres.map(c => c.name) : 
            e.genres}
            platforms = {e.platforms}
            img = {e.img || ImgDefault} 
            rating= {e.rating} />): <Loading/>} 
</div>
{displaygames.length > 0 ? 
    <div>
        <button onClick={() => setCount(count - 1)} > -  </button>
        <button onClick={() => setCount(count + 1)} > +  </button>
    </div> : null}
</div>

)};
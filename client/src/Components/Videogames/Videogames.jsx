import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames } from '../../Actions/index'


export default function Videogames () {
    const videogames = useSelector(state => state.videogames)
    //console.log(videogames)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getVideogames())
    },  [dispatch])

    //console.log(videogames)
return (
<div>
    {(videogames && videogames.map((e) =>{
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
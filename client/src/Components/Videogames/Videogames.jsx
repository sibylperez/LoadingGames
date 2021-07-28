import React from 'react';
import Card from '../Card/Card';
import Loading from '../../Containers/Loading/Loading'
import style from './Videogames.module.css'

export default function Videogames ({videogames}) {
    
return (
    <div className= {style.gamesgrid} >
      {videogames.length > 0 ?
          videogames.map((vg) => (<Card key={vg.id} data={vg} />))
        : <Loading/>} 
    </div>

)};
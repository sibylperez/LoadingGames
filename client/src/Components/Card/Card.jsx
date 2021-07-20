import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';
import ImgDefault from '../../Resourses/ImgDefault.jpg'

export default function Card({data}) {
    
let allgenres = []
if(Array.isArray(data.genres)){
    let genreDB = [data.genres].map(c => c.name)
    allgenres = allgenres.concat(genreDB)
}
  
return (
<React.Fragment>
<div>
    <div className={style.card}>
        <div className ={style.box}>
            <div className= {style.content}>
                <div className={style.cnt}>
                    <img className= {style.imagen} src={data.img || ImgDefault} alt={data.img} />
                    <div className={style.name}>{data.name}</div>
                    <div className= {style.rating}>⭐{data.rating} ⭐</div>
                    <div className={style.para}>Genres:{
                    allgenres.length === 0 ? data.genres : allgenres
                    }</div>
                    <div className={style.para}>Platforms: {data.platforms}</div>
                    <Link to={`/loadgame/${data.id}`}> <button className = {style.btn} type='submit'>More info</button></Link>
                </div>
            </div>
        </div>
    </div>
</div>
</React.Fragment>
)}